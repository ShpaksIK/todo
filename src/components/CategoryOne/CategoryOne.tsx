import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import style from './categoryOne.module.scss'
import { CategoryType, ITodo, ITodos } from '../../types/types'
import deleteSVG from './../../assets/svg/delete.svg'
import { changeTodoStatus, deleteCategory, deleteTodo } from '../../model/todoData'
import { IState } from '../../redux/store'
import { getTodos } from '../../redux/reducers/todoReducer'


interface ICategoryOneProps {
  todos: ITodos | undefined;
  getTodos: () => any;
}

const CategoryOne: React.FC<ICategoryOneProps> = ({ ...props }) => {
  const todos = props.todos
  
  const onDeleteTodo = (todoId: number, category: CategoryType): void => {
    deleteTodo(todoId, category)
    props.getTodos()
  }

  const onChangeTodoStatus = (todoId: number, category: CategoryType): void => {
    changeTodoStatus(todoId, category)
  }
 
  return (
    <article className={style.categoryOne}>
      <div className={style.categoryOne_title}>
        <b>Срочные и важные</b>
        {todos && (
          <div className={style.categoryOne_title_delete} onClick={() => deleteCategory(todos[1].category)}>
            <img src={deleteSVG} alt='Удалить дела из категории' />
          </div>
        )}
      </div>
      {!todos || todos.length === 0 ? (
        <p className={style.categoryOne_undefined}>Пока что нет срочных и важных дел</p>
      ) : (
        <div className={style.categoryOne_list}>
          {todos.map((todo: ITodo) => (
            <div key={todo.id} className={classNames(style.categoryOne_do, todo.status === 'completed' ? style.categoryOne_completed : '')}>
              <div className={style.categoryOne_do_title}>
                <div className={style.categoryOne_do_title_info}>
                  <input type='checkbox' checked={todo.status === 'completed' ? true : false} onChange={() => onChangeTodoStatus(todo.id, todo.category)} />
                  <b>{todo.title}</b>
                  {todo.status === 'progress' && (
                    <div className={classNames(style.categoryOne_do_title_info_sector, style.categoryOne_do_title_info_progress)}>
                      В процессе
                    </div>
                  )}
                  {todo.status === 'completed' && (
                    <div className={classNames(style.categoryOne_do_title_info_sector, style.categoryOne_do_title_info_completed)}>
                      Завершено
                    </div>
                  )}
                </div>
                <div className={style.categoryOne_do_title_options}>
                  <div className={style.categoryOne_do_title_options_option} onClick={() => onDeleteTodo(todo.id, todo.category)}>
                    <img src={deleteSVG} alt='Удалить дело' />
                  </div>
                </div>
              </div>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

const mapStateToProps = (state: IState) => {
    return {
      todos: state.todo.todos?.one
    }
}

export default connect(mapStateToProps, {getTodos})(CategoryOne)