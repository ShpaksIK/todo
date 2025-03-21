import React from 'react'

import style from './categoryThree.module.scss'
import { ITodo, ITodos } from '../../types/types'


interface ICategoryThreeProps {
  todos: ITodos | undefined;
}

const CategoryThree: React.FC<ICategoryThreeProps> = ({ todos }) => {
  return (
    <div className={style.categoryOne}>
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
    </div>
  )
}


export default CategoryThree