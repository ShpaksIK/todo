import React, { useState } from 'react';
import style from './Nav.module.scss';
import { useDispatch } from 'react-redux';
import { removeAll } from '../../redux/todoSlice';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

interface NavProps {
  setIsMenuAddTodoOpen: (isOpen: boolean) => void;
  filterStatus: 'all' | 'completed' | 'not_completed';
  setFilterStatus: (status: 'all' | 'completed' | 'not_completed') => void;
}

const Nav: React.FC<NavProps> = ({ setIsMenuAddTodoOpen, filterStatus, setFilterStatus }) => {
  const dispatch = useDispatch();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav__logo}>
          <h1 className="title">To-Do List</h1>
          <p>Выполняйте задачи, чтобы стать лучше!</p>
        </div>
        <div className={style.nav__links}>
          <button className={style.nav__link} onClick={() => setIsMenuAddTodoOpen(true)}>
            Добавить задачу
          </button>
          <button className={style.nav__link} onClick={() => setIsConfirmModalOpen(true)}>
            Удалить все задачи
          </button>
          <p className={style.nav__filter_text}>Фильтр</p>
          <select
            className={style.nav__select}
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value as 'all' | 'completed' | 'not_completed')
            }
          >
            <option value="all">Все</option>
            <option value="completed">Выполнено</option>
            <option value="not_completed">Не выполнено</option>
          </select>
        </div>
      </nav>

      {!isMobileMenuOpen && (
        <div className={style.nav__burger_container}>
          <h1>To-Do List</h1>
          <button className={style.nav__burger} onClick={toggleMobileMenu}>
            <span className={style.nav__burger__line}></span>
            <span className={style.nav__burger__line}></span>
            <span className={style.nav__burger__line}></span>
          </button>
        </div>
      )}

      <div className={`${style.nav__mobile} ${isMobileMenuOpen ? style.nav__mobile_open : ''}`}>
        <div className={style.nav__mobile__overlay} onClick={closeMobileMenu}></div>
        <div className={style.nav__mobile__content}>
          <button className={style.nav__mobile__close} onClick={closeMobileMenu}>
            <span>×</span>
          </button>
          <div className={style.nav__mobile__logo}>
            <h1 className="title">To-Do List</h1>
            <p>Выполняйте задачи, чтобы стать лучше!</p>
          </div>
          <div className={style.nav__mobile__links}>
            <button
              className={style.nav__mobile__link}
              onClick={() => {
                setIsMenuAddTodoOpen(true);
                closeMobileMenu();
              }}
            >
              Добавить задачу
            </button>
            <button
              className={style.nav__mobile__link}
              onClick={() => {
                setIsConfirmModalOpen(true);
                closeMobileMenu();
              }}
            >
              Удалить все задачи
            </button>
            <p className={style.nav__filter_text}>Фильтр</p>
            <select
              className={style.nav__select}
              value={filterStatus}
              onChange={(e) =>
                setFilterStatus(e.target.value as 'all' | 'completed' | 'not_completed')
              }
            >
              <option value="all">Все</option>
              <option value="completed">Выполнено</option>
              <option value="not_completed">Не выполнено</option>
            </select>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
        onConfirm={handleRemoveAll}
        title="Подтверждение удаления"
        message="Вы уверены, что хотите удалить все задачи? Это действие нельзя отменить."
      />
    </>
  );
};

export default Nav;
