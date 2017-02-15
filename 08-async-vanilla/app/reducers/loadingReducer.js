import * as types from '../constants/constant'

function reducer(state = false, action) {
  switch (action.type) {
    case types.LOADING_SET:
      return action.payload
      
    default:
      return state
  }
}

export default reducer
