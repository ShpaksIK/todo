import style from './Todo.module.scss';
import type { Todo } from '../../redux/todo';
import ButtonDanger from '../ButtonDanger/ButtonDanger';
import { removeTodo, toggleTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

interface TodoProps {
    todo: Todo;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div className={style.todo}>
            <div className={style.todo__header}>
                <div className={style.todo__header__text}>
                    <h3 className={style.todo__header__title}>{todo.title}</h3>
                    <p className={classNames(style.todo__header__status, {
                        [style.todo__header__status_completed]: todo.completed,
                        [style.todo__header__status_not_completed]: !todo.completed
                    })}>{todo.completed ? 'Выполнено' : 'Не выполнено'}</p>
                </div>
                <div className={style.todo__header__buttons}>
                    <button className={style.todo__header__button} onClick={() => dispatch(toggleTodo(todo.id))}>
                        {todo.completed ? 'Не выполнено' : 'Выполнено'}
                    </button>
                    <ButtonDanger onClick={() => dispatch(removeTodo(todo.id))}>
                        Удалить
                    </ButtonDanger>
                </div>
            </div>
            <div className={style.todo__content}>
                <p className={style.todo__content__description}>{todo.description}</p>
            </div>
        </div>
    )
}

export default Todo;