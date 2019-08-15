import { combineReducers } from 'redux'

// import all reducers
import user from './user'
import boardScore from './boardScore'
import pattern from './pattern'
import sound from './sound'

const appReducer = combineReducers({
    user,
    boardScore,
    pattern,
    sound
})

export default appReducer