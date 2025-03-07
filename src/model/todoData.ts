import { CategoryType, ITodoCategories, ITodo, ITodos } from "../types/types"


const todos: ITodoCategories = {
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

export const getTodos = (): ITodoCategories => {
    return todos
}

export const deleteTodo = (todoId: number, category: CategoryType): void => {
    
}

export const deleteCategory = (category: CategoryType): void => {
    
}

export const deleteAllTodos = (): void => {
    if (todos.one) {
        todos.one.filter(() => false)
    }
    if (todos.two) {
        todos.two.filter(() => false)
    }
    if (todos.three) {
        todos.three.filter(() => false)
    }
    if (todos.four) {
        todos.four.filter(() => false)
    }
}

export const changeTodoStatus = (todoId: number, category: CategoryType): void => {
    if (todos[category]) {
        todos[category].map((todo: ITodo) => {
            if (todoId === todo.id) {
                todo.status = todo.status === 'completed' ? 'progress' : 'completed'
            }
        })
    }
}