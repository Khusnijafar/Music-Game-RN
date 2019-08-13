import { combineReducers } from 'redux'

// import all reducers
import user from './user'

const appReducer = combineReducers({
    user
})

export default appReducer