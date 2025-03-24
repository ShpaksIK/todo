import { applyMiddleware, legacy_createStore, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'

import todoReducer, { IDefaultState } from './reducers/todoReducer'


export interface IState {
    todo: IDefaultState
}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default legacy_createStore<any, any>(rootReducer, applyMiddleware(thunk))