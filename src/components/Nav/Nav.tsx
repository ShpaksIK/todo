import React from 'react'
import classNames from 'classnames'

import style from './nav.module.scss'
import logoIMG from './../../assets/images/logo.png'


const Nav: React.FC = () => {
  return (
      <nav>
        <img src={logoIMG} />
        <b>To-Do List</b>
        <div className={style.nav_link}>Добавить</div>
        <div className={style.nav_link}>Выполнить все</div>
        <div className={classNames(style.nav_link, style.nav_link_danger)}>Удалить все</div>
      </nav>
  )
}


export default Nav