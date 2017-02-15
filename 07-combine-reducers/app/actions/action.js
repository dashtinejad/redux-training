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

export function setName(name) {
  return {
    type: types.NAME_SET,
    payload: name
  }
}
