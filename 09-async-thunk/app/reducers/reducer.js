import { combineReducers } from 'redux'
import counter from './counterReducer'
import name from './nameReducer'
import loading from './loadingReducer'
import profile from './profileReducer'

const rootReducer = combineReducers({
  counter,
  name,
  loading,
  profile,
})

export default rootReducer
