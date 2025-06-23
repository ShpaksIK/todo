import React, { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Nav from '../components/Nav/Nav';
import MenuAddTodo from '../components/MenuAddTodo/MenuAddTodo';
import type { Category, Todo } from '../redux/todo';
import Modal from '../components/Modal/Modal';
import ButtonDanger from '../components/ButtonDelete/ButtonDelete';
import { removeByCategory } from '../redux/todoSlice';
import TodoComponent from '../components/Todo/Todo';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';
import { getCategoryTitle } from '../utils/getCategoryTitle';
import deleteIcon from '../assets/svg/delete.svg';
import Dropdown from '../components/Dropdown/Dropdown';
import ButtonDelete from '../components/ButtonDelete/ButtonDelete';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todos = Array.isArray(useSelector((state: RootState) => state.todo.todos))
    ? useSelector((state: RootState) => state.todo.todos)
    : [];

  const [isMenuAddTodoOpen, setIsMenuAddTodoOpen] = useState<boolean>(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState<Category>('urgent_important');
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'not_completed'>('all');

  const handleOpenMenuAddTodo = (category: Category) => {
    setIsSelectedCategory(category);
    setIsMenuAddTodoOpen(true);
  };

  const handleDeleteAll = (category: Category) => {
    setCategoryToDelete(category);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (categoryToDelete) {
      dispatch(removeByCategory(categoryToDelete));
    }
  };

  const [urgentImportant, setUrgentImportant] = useState<Todo[]>(
    todos.filter((todo) => todo.category === 'urgent_important'),
  );
  const [urgentNotImportant, setUrgentNotImportant] = useState<Todo[]>(
    todos.filter((todo) => todo.category === 'urgent_not_important'),
  );
  const [importantNotUrgent, setImportantNotUrgent] = useState<Todo[]>(
    todos.filter((todo) => todo.category === 'important_not_urgent'),
  );
  const [notUrgentNotImportant, setNotUrgentNotImportant] = useState<Todo[]>(
    todos.filter((todo) => todo.category === 'not_urgent_not_important'),
  );

  useEffect(() => {
    setUrgentImportant(
      todos.filter((todo) => {
        if (todo.category !== 'urgent_important') return false;
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return todo.completed;
        if (filterStatus === 'not_completed') return !todo.completed;
        return true;
      }),
    );
    setUrgentNotImportant(
      todos.filter((todo) => {
        if (todo.category !== 'urgent_not_important') return false;
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return todo.completed;
        if (filterStatus === 'not_completed') return !todo.completed;
        return true;
      }),
    );
    setImportantNotUrgent(
      todos.filter((todo) => {
        if (todo.category !== 'important_not_urgent') return false;
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return todo.completed;
        if (filterStatus === 'not_completed') return !todo.completed;
        return true;
      }),
    );
    setNotUrgentNotImportant(
      todos.filter((todo) => {
        if (todo.category !== 'not_urgent_not_important') return false;
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return todo.completed;
        if (filterStatus === 'not_completed') return !todo.completed;
        return true;
      }),
    );
  }, [todos, filterStatus]);

  return (
    <div className={style.home}>
      <Nav
        setIsMenuAddTodoOpen={setIsMenuAddTodoOpen}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <div className={style.home__todos}>
        <div className={style.home__todos__urgent_important}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Срочно и важно</h2>
            <div className={style.home__todos__header__buttons}>
              <Dropdown>
                <ButtonPrimary onClick={() => handleOpenMenuAddTodo('urgent_important')}>
                  <p>Создать</p>
                </ButtonPrimary>
                <ButtonDelete onClick={() => handleDeleteAll('urgent_important')}>
                  <img src={deleteIcon} alt="Удалить все" />
                  <p title="Удалить все">Удалить все</p>
                </ButtonDelete>
              </Dropdown>
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
              <Dropdown>
                <ButtonPrimary onClick={() => handleOpenMenuAddTodo('urgent_not_important')}>
                  <p>Создать</p>
                </ButtonPrimary>
                <ButtonDelete onClick={() => handleDeleteAll('urgent_not_important')}>
                  <img src={deleteIcon} alt="Удалить все" />
                  <p title="Удалить все">Удалить все</p>
                </ButtonDelete>
              </Dropdown>
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
              <Dropdown>
                <ButtonPrimary onClick={() => handleOpenMenuAddTodo('important_not_urgent')}>
                  <p>Создать</p>
                </ButtonPrimary>
                <ButtonDelete onClick={() => handleDeleteAll('important_not_urgent')}>
                  <img src={deleteIcon} alt="Удалить все" />
                  <p title="Удалить все">Удалить все</p>
                </ButtonDelete>
              </Dropdown>
            </div>
          </div>
          <div className={style.home__todos__content}>
            {importantNotUrgent.length > 0 ? (
              importantNotUrgent.map((todo) => <TodoComponent key={todo.id} todo={todo} />)
            ) : (
              <div className={style.home__todos__empty}>
                <p>В данной категории нет задач</p>
              </div>
            )}
          </div>
        </div>
        <div className={style.home__todos__not_urgent_not_important}>
          <div className={style.home__todos__header}>
            <h2 className={style.home__todos__header__title}>Не срочно и не важно</h2>
            <div className={style.home__todos__header__buttons}>
              <Dropdown>
                <ButtonPrimary onClick={() => handleOpenMenuAddTodo('not_urgent_not_important')}>
                  <p>Создать</p>
                </ButtonPrimary>
                <ButtonDelete onClick={() => handleDeleteAll('not_urgent_not_important')}>
                  <img src={deleteIcon} alt="Удалить все" />
                  <p title="Удалить все">Удалить все</p>
                </ButtonDelete>
              </Dropdown>
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
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
        onConfirm={handleConfirmDelete}
        title="Подтверждение удаления"
        message={`Вы уверены, что хотите удалить все задачи в категории "${getCategoryTitle(categoryToDelete as Category)}"?`}
      />
    </div>
  );
};

export default Home;
