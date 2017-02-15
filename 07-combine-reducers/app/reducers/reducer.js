import { combineReducers } from 'redux'
import counter from './counterReducer'
import name from './nameReducer'

const rootReducer = combineReducers({
  counter,
  name,
})

export default rootReducer
