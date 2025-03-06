import { ICategory } from "../interface"


export const getTodos = async () => {
    const todosOne: ICategory = {
        category: 'one',
        todos: [
            {id: 1, title: 'Test1', description: 'Test todo', category: 'one'}
        ]
    }
    const todosTwo: ICategory = {
        category: 'two',
        todos: [
            {id: 1, title: 'Test1', description: 'Test todo', category: 'two'}
        ]
    }
    const todosThree: ICategory = {
        category: 'three',
        todos: [
            {id: 1, title: 'Test1', description: 'Test todo', category: 'three'}
        ]
    }
    const todosFour: ICategory = {
        category: 'four',
        todos: [
            {id: 1, title: 'Test1', description: 'Test todo', category: 'four'}
        ]
    }

    return [todosOne, todosTwo, todosThree, todosFour]
}