import React from 'react'
import classNames from 'classnames'

import style from './categoryOne.module.scss'
import { ITodo, ITodos } from '../../types/types'
import deleteSVG from './../../assets/svg/delete.svg'


interface ICategoryOneProps {
  todos: ITodos | undefined;
}

const CategoryOne: React.FC<ICategoryOneProps> = ({ todos }) => {
  const deleteTodo = (todoId: number): void => {
      
  }
 
  return (
    <div className={style.categoryOne}>
      <b>Срочные и важные</b>
      {!todos || todos.length === 0 ? (
        <p className={style.categoryOne_undefined}>Пока что нет срочных и важных дел</p>
      ) : (
        <div className={style.categoryOne_list}>
          {todos.map((todo: ITodo) => (
            <div key={todo.id} className={classNames(style.categoryOne_do, todo.status === 'completed' ? style.categoryOne_completed : '')}>
              <div className={style.categoryOne_do_title}>
                <div className={style.categoryOne_do_title_info}>
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
                  <div className={style.categoryOne_do_title_options_option} onClick={() => deleteTodo(todo.id)}>
                    <img src={deleteSVG} />
                  </div>
                </div>
              </div>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default CategoryOne