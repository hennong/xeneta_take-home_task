import { Action, combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import { searchReducer } from './States/SearchState'

export const store = configureStore({
  reducer: combineReducers({
    search: searchReducer
  })
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<State> = reduxUseSelector
export const useDispatch = (): Dispatch => reduxUseDispatch<Dispatch>()
export type StoreThunk<T> = ThunkAction<T, State, undefined, Action>
