import React from 'react';
import style from './Nav.module.scss';
import { useDispatch } from 'react-redux';
import { removeAll } from '../../redux/todoSlice';

interface NavProps {
  setIsMenuAddTodoOpen: (isOpen: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ setIsMenuAddTodoOpen }) => {
  const dispatch = useDispatch();

  return (
    <nav className={style.nav}>
      <div className={style.nav__logo}>
        <h1 className="title">To-Do List</h1>
        <p>Выполняйте задачи, чтобы стать лучше!</p>
      </div>
      <div className={style.nav__links}>
        <button className={style.nav__link} onClick={() => setIsMenuAddTodoOpen(true)}>
          Добавить задачу
        </button>
        <button className={style.nav__link} onClick={() => dispatch(removeAll())}>
          Удалить все задачи
        </button>
      </div>
    </nav>
  );
};

export default Nav;
