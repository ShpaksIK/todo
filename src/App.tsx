import React, { useEffect, useState } from 'react'

import style from './assets/styles/app.module.scss'
import { getTodos } from './model/todoData'
import Nav from './components/Nav/Nav'
import CategoryOne from './components/CategoryOne/CategoryOne'
import { ITodoCategories } from './types/types'
import CategoryTwo from './components/CategoryTwo/CategoryTwo'
import CategoryThree from './components/CategoryThree/CategoryThree'
import CategoryFour from './components/CategoryFour/CategoryFour'


const App: React.FC = () => {
  const [todoCategories, setTodoCategories] = useState<ITodoCategories | null>(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response: ITodoCategories = await getTodos()
        setTodoCategories(response)
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error);
      }
    }
    fetchTodos()
  }, [])

  return (
      <div className={style.app}>
        <Nav />
        <main>
          <CategoryOne todos={todoCategories?.one} />
          <CategoryTwo todos={todoCategories?.two} />
          <CategoryThree todos={todoCategories?.three} />
          <CategoryFour todos={todoCategories?.four} />
        </main>
      </div>
  )
}


export default App