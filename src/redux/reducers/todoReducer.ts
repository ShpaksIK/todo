import { ITodoCategories, ITodos } from '../../types/types'
import { getTodosAll } from '../../model/todoData'


const SET_TODO_ONE = 'SET_TODO_ONE'
const SET_TODO_TWO = 'SET_TODO_TWO'
const SET_TODO_THREE = 'SET_TODO_THREE'
const SET_TODO_FOUR = 'SET_TODO_FOUR'

export interface IDefaultState {
    todos: ITodoCategories
}

let defaultState: IDefaultState = {
    todos: {
        one: null,
        two: null,
        three: null,
        four: null
    }
}

type TodoReducerConstantsType = typeof SET_TODO_ONE | typeof SET_TODO_TWO | typeof SET_TODO_THREE | typeof SET_TODO_FOUR

interface IActionReducer {
    type: TodoReducerConstantsType;
    payload: any;
}

const todoReducer = (state: IDefaultState = defaultState, action: IActionReducer) => {
    switch (action.type) {
        case SET_TODO_ONE:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    one: action.payload
                }
            }
        case SET_TODO_TWO:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    two: action.payload
                }
            }
        case SET_TODO_THREE:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    three: action.payload
                }
            }
        case SET_TODO_FOUR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    four: action.payload
                }
            }
                
        default:
            return state
    }
}

export const setTodoOneAC = (todos: ITodos): IActionReducer => ({
    type: SET_TODO_ONE,
    payload: todos
})

export const setTodoTwoAC = (todos: ITodos): IActionReducer => ({
    type: SET_TODO_TWO,
    payload: todos
})

export const setTodoThreeAC = (todos: ITodos): IActionReducer => ({
    type: SET_TODO_THREE,
    payload: todos
})

export const setTodoFourAC = (todos: ITodos): IActionReducer => ({
    type: SET_TODO_FOUR,
    payload: todos
})

export const getTodos = () => async (dispatch: any) => {
    const todos: ITodoCategories = getTodosAll()
    if (todos.one) {
        dispatch(setTodoOneAC(todos.one))
    }
    if (todos.two) {
        dispatch(setTodoTwoAC(todos.two))
    }
    if (todos.three) {
        dispatch(setTodoThreeAC(todos.three))
    }
    if (todos.four) {
        dispatch(setTodoFourAC(todos.four))
    }
}


export default todoReducer