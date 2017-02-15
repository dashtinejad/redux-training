import * as types from '../constants/constant'

function reducer(state = 'mojtaba', action) {
  switch (action.type) {
    case types.NAME_SET:
      return action.payload
      
    default:
      return state
  }
}

export default reducer
