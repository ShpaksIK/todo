import { ITodoCategories, ITodos } from "../types/types"


export const getTodos = (): ITodoCategories => {
    const todosOne: ITodos = [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'one'},
        {id: 2, title: 'Test2', description: 'Test todo', status: 'completed', category: 'one'},
        {id: 3, title: 'Test3', description: 'Test todo', status: 'progress', category: 'one'},
    ]
    const todosTwo: ITodos = [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'two'}
    ]
    const todosThree: ITodos = [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'three'}
    ]
    const todosFour: ITodos = [
        {id: 1, title: 'Test1', description: 'Test todo', status: 'progress', category: 'four'}
    ]

    const responseData: ITodoCategories = {
        one: todosOne,
        two: todosTwo,
        three: todosThree,
        four: todosFour,
    }
    
    return responseData
}

export const deleteTodo = (): void => {
    
}

export const deleteAllTodos = (): void => {

}