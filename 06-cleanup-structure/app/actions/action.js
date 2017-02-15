import * as types from '../constants/constant'

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}
