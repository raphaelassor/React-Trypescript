import { combineReducers } from 'redux';
import { repoReducer } from './repos'

export const reducers = combineReducers({
    repoModule: repoReducer
})

export type RootState = ReturnType<typeof reducers>