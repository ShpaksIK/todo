import React, { useEffect, useState } from 'react'

import style from './assets/styles/app.module.scss'
import { getTodos } from './redux/reducers/todoReducer'
import Nav from './components/Nav/Nav'
import CategoryOne from './components/CategoryOne/CategoryOne'
import CategoryTwo from './components/CategoryTwo/CategoryTwo'
import CategoryThree from './components/CategoryThree/CategoryThree'
import CategoryFour from './components/CategoryFour/CategoryFour'
import AddTodo from './components/AddTodo/AddTodo'


const App: React.FC = () => {
  const [isOpenCreateTodoBlock, setIsOpenCreateTodoBlock] = useState<boolean>(false)

  useEffect(() => {
    getTodos()
  }, [])

  return (
      <div className={style.app}>
        {isOpenCreateTodoBlock && (
          <AddTodo closeBlock={() => setIsOpenCreateTodoBlock(false)} />
        )}
        <Nav openCreateTodoBlock={() => setIsOpenCreateTodoBlock(true)} />
        <main>
          <CategoryOne />
        </main>
      </div>
  )
}


export default App