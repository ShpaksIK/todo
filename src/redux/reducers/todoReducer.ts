import { CategoryType, ITodo, ITodoCategories, ITodoCategoriesType } from '../../types/types'


const SET_TODOS = 'SET_TODOS'

export interface IDefaultState {
    todos: ITodoCategoriesType
}

let defaultState: IDefaultState = {
    todos: {
        one: null,
        two: null,
        three: null,
        four: null
    }
}

type TodoReducerConstantsType = typeof SET_TODOS

interface IActionReducer {
    type: TodoReducerConstantsType;
    payload: any;
}

const todoReducer = (state: IDefaultState = defaultState, action: IActionReducer) => {
    switch (action.type) {
        case SET_TODOS:
            const todosOne = action.payload.one ? action.payload : state.todos?.one
            const todosTwo = action.payload.two ? action.payload : state.todos?.two
            const todosThree = action.payload.three ? action.payload : state.todos?.three
            const todosFour = action.payload.four ? action.payload : state.todos?.four
            return {
                ...state,
                todos: {
                    todosOne,
                    todosTwo,
                    todosThree,
                    todosFour
                }
            }
        default:
            return state
    }
}

export const setTodosAC = (todos: ITodoCategories): IActionReducer => ({
    type: SET_TODOS,
    payload: todos
})

export const getTodos = () => async (dispatch: any) => {
    const isTodos = localStorage.getItem('todos')
    if (isTodos) {
        const todos = JSON.parse(isTodos)
        dispatch(setTodosAC(todos))
    } else {
        const emptyTodos: ITodoCategoriesType = {
            one: [
                {id: 1, title: 'Test1', description: 'Test todoggwrthwertjhrejjrjyerje', status: 'progress', category: 'one'}
            ]
        }
        localStorage.setItem('todos', JSON.stringify(emptyTodos))
    }
}

export const deleteTodo = (todoId: number, category: CategoryType) => async (dispatch: any, getState: any) => {
    const filteredTodos = getState().todo.todos[category]?.filter((todo: ITodo) => todo.id !== todoId)
    localStorage.setItem('todos', JSON.stringify({
        ...getState().todo.todos,
        filteredTodos
    }))
    dispatch(setTodosAC({
        ...getState().todo.todos,
        filteredTodos
    }))
}


export default todoReducer