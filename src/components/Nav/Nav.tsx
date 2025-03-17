import React from 'react'
import classNames from 'classnames'

import style from './nav.module.scss'
import logoIMG from './../../assets/images/logo.png'
import { completeAllTodos, deleteAllTodos } from '../../model/todoData'


interface INavProps {
  openCreateTodoBlock: () => void;
}

const Nav: React.FC<INavProps> = ({ openCreateTodoBlock }) => {
  return (
      <nav>
        <img src={logoIMG} />
        <b>To-Do List</b>
        <div className={style.nav_link} onClick={openCreateTodoBlock}>Добавить</div>
        <div className={style.nav_link} onClick={completeAllTodos}>Выполнить все</div>
        <div className={classNames(style.nav_link, style.nav_link_danger)} onClick={deleteAllTodos}>Удалить все</div>
      </nav>
  )
}


export default Nav