import { combineReducers } from 'redux'
import { detailReducer, filterReducer, searchReducer } from './movies'

const reducers = combineReducers({
    detail: detailReducer,
    search: searchReducer,
    filter: filterReducer
})

export default reducers