import React from 'react'

import style from './categoryTwo.module.scss'
import { ITodo, ITodos } from '../../types/types'


interface ICategoryTwoProps {
  todos: ITodos | undefined;
}

const CategoryTwo: React.FC<ICategoryTwoProps> = ({ todos }) => {
  return (
    <article className={style.categoryOne}>
      <b>Срочные и важные</b>
      {!todos || todos.length === 0 ? (
        <p>Пока что нет срочных и важных дел</p>
      ) : (
        todos.map((todo: ITodo) => (
          <div key={todo.id} className={style.categoryOne_do}>
            <b>{todo.title}</b>
            <p>{todo.description}</p>
          </div>
        ))
      )}
    </article>
  )
}


export default CategoryTwo