import React, { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Nav from '../components/Nav/Nav';
import MenuAddTodo from '../components/MenuAddTodo/MenuAddTodo';
import type { Category, Todo } from '../redux/todo';
import Modal from '../components/Modal/Modal';
import ButtonDanger from '../components/ButtonDanger/ButtonDanger';
import { removeByCategory } from '../redux/todoSlice';
import TodoComponent from '../components/Todo/Todo';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todos = Array.isArray(useSelector((state: RootState) => state.todo.todos))
    ? useSelector((state: RootState) => state.todo.todos)
    : [];

  const [isMenuAddTodoOpen, setIsMenuAddTodoOpen] = useState<boolean>(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState<Category>('urgent_important');

  const handleOpenMenuAddTodo = (category: Category) => {
    setIsSelectedCategory(category);
    setIsMenuAddTodoOpen(true);
  };

  const [urgentImportant, setUrgentImportant] = useState<Todo[]>(todos.filter((todo) => todo.category === 'urgent_important'));
  const [urgentNotImportant, setUrgentNotImportant] = useState<Todo[]>(todos.filter((todo) => todo.category === 'urgent_not_important'));
  const [importantNotUrgent, setImportantNotUrgent] = useState<Todo[]>(todos.filter((todo) => todo.category === 'important_not_urgent'));
  const [notUrgentNotImportant, setNotUrgentNotImportant] = useState<Todo[]>(todos.filter((todo) => todo.category === 'not_urgent_not_important'));

  useEffect(() => {
    setUrgentImportant(todos.filter((todo) => todo.category === 'urgent_important'));
    setUrgentNotImportant(todos.filter((todo) => todo.category === 'urgent_not_important'));
    setImportantNotUrgent(todos.filter((todo) => todo.category === 'important_not_urgent'));
    setNotUrgentNotImportant(todos.filter((todo) => todo.category === 'not_urgent_not_important'));
  }, [todos]);

  return (
    <div className={style.home}>
      <Nav setIsMenuAddTodoOpen={setIsMenuAddTodoOpen} />
      <div className={style.home__todos}>
        <div className={style.home__todos__urgent_important}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Срочно и важно</h2>
            <div className={style.home__todos__header__buttons}>
              <button
                className={style.home__todos__header__button}
                onClick={() => handleOpenMenuAddTodo('urgent_important')}
              >
                <span>+</span>
              </button>
              <ButtonDanger onClick={() => dispatch(removeByCategory('urgent_important'))}>
                Удалить все
              </ButtonDanger>
            </div>
          </div>
          <div className={style.home__todos__content}>
            {urgentImportant.length > 0 ? (
              urgentImportant.map((todo) => <TodoComponent key={todo.id} todo={todo} />)
            ) : (
              <div className={style.home__todos__empty}>
                <p>В данной категории нет задач</p>
              </div>
            )}
          </div>
        </div>
        <div className={style.home__todos__urgent_not_important}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Срочно и не важно</h2>
            <div className={style.home__todos__header__buttons}>
              <button
                className={style.home__todos__header__button}
                onClick={() => handleOpenMenuAddTodo('urgent_not_important')}
              >
                <span>+</span>
              </button>
              <ButtonDanger onClick={() => dispatch(removeByCategory('urgent_not_important'))}>
                Удалить все
              </ButtonDanger>
            </div>
          </div>
          <div className={style.home__todos__content}>
            {urgentNotImportant.length > 0 ? (
              urgentNotImportant.map((todo) => <TodoComponent key={todo.id} todo={todo} />)
            ) : (
              <div className={style.home__todos__empty}>
                <p>В данной категории нет задач</p>
              </div>
            )}
          </div>
        </div>
        <div className={style.home__todos__important_not_urgent}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Важно и не срочно</h2>
            <div className={style.home__todos__header__buttons}>
              <button
                className={style.home__todos__header__button}
                onClick={() => handleOpenMenuAddTodo('important_not_urgent')}
              >
                <span>+</span>
              </button>
              <ButtonDanger onClick={() => dispatch(removeByCategory('important_not_urgent'))}>
                Удалить все
              </ButtonDanger>
            </div>
          </div>
          {importantNotUrgent.length > 0 ? (
            importantNotUrgent.map((todo) => <TodoComponent key={todo.id} todo={todo} />)
          ) : (
            <div className={style.home__todos__empty}>
              <p>В данной категории нет задач</p>
            </div>
          )}
        </div>
        <div className={style.home__todos__not_urgent_not_important}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Не срочно и не важно</h2>
            <div className={style.home__todos__header__buttons}>
              <button
                className={style.home__todos__header__button}
                onClick={() => handleOpenMenuAddTodo('not_urgent_not_important')}
              >
                <span>+</span>
              </button>
              <ButtonDanger onClick={() => dispatch(removeByCategory('not_urgent_not_important'))}>
                Удалить все
              </ButtonDanger>
            </div>
          </div>
          <div className={style.home__todos__content}>
            {notUrgentNotImportant.length > 0 ? (
              notUrgentNotImportant.map((todo) => <TodoComponent key={todo.id} todo={todo} />)
            ) : (
              <div className={style.home__todos__empty}>
                <p>В данной категории нет задач</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={isMenuAddTodoOpen} setIsOpen={setIsMenuAddTodoOpen}>
        <MenuAddTodo
          isSelectedCategory={isSelectedCategory}
          setIsMenuAddTodoOpen={setIsMenuAddTodoOpen}
        />
      </Modal>
    </div>
  );
};

export default Home;
