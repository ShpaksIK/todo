import React, { useEffect, useState } from 'react'

import style from './assets/styles/app.module.scss'
import { getTodos } from './model/todoData'
import Nav from './components/Nav/Nav'
import CategoryOne from './components/CategoryOne/CategoryOne'
import { ITodoCategories } from './interface'


const App: React.FC = () => {
  // const [todoCategories, setTodoCategories] = useState<ITodoCategories>()
  // useEffect(() => {
  //   const responce = getTodos()
  //   setTodoCategories(responce)
  // }, [])

  
  
  return (
      <div className={style.app}>
        <Nav />
        <main>
          <CategoryOne todos={} />
        </main>
      </div>
  )
}


export default App