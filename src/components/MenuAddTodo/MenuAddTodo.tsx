import React from 'react';
import style from './MenuAddTodo.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { type Category, type Todo } from '../../redux/todo';
import * as Yup from 'yup';
import { addTodo, changeTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

interface FormValues {
  title: string;
  description: string;
  category: Category;
  initialTodo?: Todo;
}

interface MenuAddTodoProps {
  isSelectedCategory: Category;
  setIsMenuAddTodoOpen: (isOpen: boolean) => void;
  initialTodo?: Todo;
}

const MenuAddTodo: React.FC<MenuAddTodoProps> = ({
  isSelectedCategory,
  setIsMenuAddTodoOpen,
  initialTodo,
}) => {
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    title: initialTodo?.title || '',
    description: initialTodo?.description || '',
    category: initialTodo?.category || isSelectedCategory,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Название задачи обязательно')
      .min(3, 'Название задачи должно быть не менее 3 символов')
      .max(100, 'Название задачи должно быть не более 100 символов'),
    category: Yup.string().required('Категория задачи обязательна'),
  });

  const handleSubmit = (values: FormValues) => {
    if (initialTodo) {
      dispatch(
        changeTodo({
          id: initialTodo.id,
          title: values.title,
          description: values.description,
          category: values.category,
          completed: initialTodo.completed,
        }),
      );
    } else {
      dispatch(
        addTodo({
          title: values.title,
          description: values.description,
          category: values.category,
        }),
      );
    }

    setIsMenuAddTodoOpen(false);
  };

  return (
    <div className={style.menu}>
      <h2 className="title">{initialTodo ? 'Изменить задачу' : 'Добавить задачу'}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.menu__form}>
          <Field type="text" name="title" placeholder="Название задачи" />
          <ErrorMessage name="title" component="div" className={style.error} />
          <Field type="text" name="description" placeholder="Описание задачи" />
          <ErrorMessage name="description" component="div" className={style.error} />
          <Field as="select" name="category" value={isSelectedCategory}>
            <option value="urgent_important">Срочно и важно</option>
            <option value="urgent_not_important">Срочно и не важно</option>
            <option value="important_not_urgent">Важно и не срочно</option>
            <option value="not_urgent_not_important">Не срочно и не важно</option>
          </Field>
          <ErrorMessage name="category" component="div" className={style.error} />
          <button type="submit">{initialTodo ? 'Изменить' : 'Добавить'}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MenuAddTodo;
