import React from 'react'

import style from './categoryOne.module.scss'
import { ITodo, ITodos } from '../../interface'


const CategoryOne: React.FC<ITodos> = ({ todos }) => {
  return (
      <div className={style.categoryOne}>
        <b>Срочные и важные</b>
        {todos.length === 0 ? (
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


export default CategoryOne