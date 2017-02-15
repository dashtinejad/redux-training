import * as types from '../constants/constant'

function reducer(state = {}, action) {
  switch (action.type) {
    case types.PROFILE_SET:
      return action.payload
      
    default:
      return state
  }
}

export default reducer
