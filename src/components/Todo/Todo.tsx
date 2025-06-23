import style from './Todo.module.scss';
import type { Todo } from '../../redux/todo';
import { removeTodo, toggleTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import deleteIcon from '../../assets/svg/delete.svg';
import Dropdown from '../Dropdown/Dropdown';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import { useState } from 'react';
import MenuAddTodo from '../MenuAddTodo/MenuAddTodo';
import Modal from '../Modal/Modal';

interface TodoProps {
  todo: Todo;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isMenuChangeTodoOpen, setIsMenuChangeTodoOpen] = useState(false);
  const time = todo.id ? new Date(Number(todo.id)).toLocaleString('ru-RU') : 'Дата не указана';

  return (
    <div className={style.todo}>
      <div className={style.todo__header}>
        <div className={style.todo__header__text}>
          <h3 className={style.todo__header__title}>{todo.title}</h3>
          <p
            className={classNames(style.todo__header__status, {
              [style.todo__header__status_completed]: todo.completed,
              [style.todo__header__status_not_completed]: !todo.completed,
            })}
          >
            {todo.completed ? 'Выполнено' : 'Не выполнено'}
          </p>
        </div>
        <div className={style.todo__header__buttons}>
          <button
            className={style.todo__header__button}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.completed ? 'Не выполнено' : 'Выполнено'}
          </button>
          <Dropdown>
            <ButtonPrimary onClick={() => setIsMenuChangeTodoOpen(true)}>
              <p>Изменить</p>
            </ButtonPrimary>
            <ButtonDelete onClick={() => dispatch(removeTodo(todo.id))}>
              <img src={deleteIcon} alt="Удалить" />
              <p>Удалить</p>
            </ButtonDelete>
          </Dropdown>
        </div>
      </div>
      <div className={style.todo__content}>
        <p className={style.todo__content__description}>{todo.description}</p>
        <p className={style.todo__content__time}>{time}</p>
      </div>
      <Modal isOpen={isMenuChangeTodoOpen} setIsOpen={setIsMenuChangeTodoOpen}>
        <MenuAddTodo
          isSelectedCategory={todo.category}
          setIsMenuAddTodoOpen={setIsMenuChangeTodoOpen}
          initialTodo={todo}
        />
      </Modal>
    </div>
  );
};

export default Todo;
