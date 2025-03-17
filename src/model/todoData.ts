import { CategoryType, ITodoCategories, ITodo } from "../types/types"


export const todos: ITodoCategories = {
    one: [
        {id: 1, title: 'Test1', description: 'Test todoggwrthwertjhrejjrjyerje', status: 'progress', category: 'one'},
        {id: 2, title: 'Test2', description: 'Test todo', status: 'completed', category: 'one'},
        {id: 3, title: 'Test3', description: 'Test todo', status: 'progress', category: 'one'},
    ],
    two: [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'two'}
    ],
    three: [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'three'}
    ],
    four: [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'four'}
    ]
}

export const getTodosAll = (): ITodoCategories => {
    return todos
}

export const deleteTodo = (todoId: number, category: CategoryType): void => {
    todos[category]?.filter(todo => todo.id !== todoId)
}

export const deleteCategory = (category: CategoryType): void => {
    todos[category] = null
}

export const deleteAllTodos = (): void => {
    todos.one?.filter(() => false)
    todos.two?.filter(() => false)
    todos.three?.filter(() => false)
    todos.four?.filter(() => false)
}

export const changeTodoStatus = (todoId: number, category: CategoryType): void => {
    todos[category]?.map((todo: ITodo) => {
        if (todoId === todo.id) {
            todo.status = todo.status === 'completed' ? 'progress' : 'completed'
        }
    })
}

export const completeAllTodos = (): void => {
    todos.one?.map((todo: ITodo) => todo.status = 'completed')
    todos.two?.map((todo: ITodo) => todo.status = 'completed')
    todos.three?.map((todo: ITodo) => todo.status = 'completed')
    todos.four?.map((todo: ITodo) => todo.status = 'completed')
}

export const createTodo = (category: CategoryType, title: string, description: string = ''): void => {
    const newTodo: ITodo = {
        id: todos[category] ? todos[category].length + 1 : 1,
        title: title,
        description: description,
        status: 'progress',
        category: category
    }
    
    if (!todos[category]) {
        todos[category] = [newTodo]
    } else {
        todos[category].unshift(newTodo)
    }
}

export const changeCategory = (category: CategoryType, todoId: number, newCategory: CategoryType): void => {
    const findedTodo = todos[category]?.find(todo => todo.id === todoId)
    if (findedTodo) {
        todos[newCategory]?.unshift(findedTodo)
        deleteTodo(todoId, category)
    }
}