import React from 'react'

import style from './addTodo.module.scss'
import closeSVG from './../../assets/svg/close.svg'


interface IAddTodoProps {
  closeBlock: () => void;
}

const AddTodo: React.FC<IAddTodoProps> = ({ closeBlock }) => {
  return (
    <div className={style.addTodo_block}>
      <form className={style.addTodo}>
        <div className={style.addTodo_close} onClick={closeBlock}>
          <img src={closeSVG} alt='Закрыть' />
        </div>
        <div className={style.addTodo_title}>
          <h2>Добавить задачу</h2>
          <p>Определитесь с категорией и добавьте новую задачу в неё.</p>
        </div>
        <div className={style.addTodo_form}>
          <div className={style.addTodo_form_input}>
            <p>Введите название задачи</p>
            <input type='text' maxLength={100} />
          </div>
          <div className={style.addTodo_form_input}>
            <p>Введите описание задачи</p>
            <input type='text' maxLength={1000} />
          </div>
          <div className={style.addTodo_form_input}>
            <p>Выберите категорию задачи</p>
            <select name='categories'>
              <option value=''>Выберите категорию</option>
              <option value='one'>Срочное и важное</option>
              <option value='two'>Несрочное и важное</option>
              <option value='three'>Срочное, но неважное</option>
              <option value='four'>Несрочное и неважное</option>
            </select>
          </div>
        </div>
        <button className={style.addTodo_create}>Создать</button>
      </form>
    </div>
  )
}


export default AddTodo