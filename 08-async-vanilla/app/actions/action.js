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

export function setLoading(loadingStatus) {
  return {
    type: types.LOADING_SET,
    payload: loadingStatus
  }
}

export function setProfile(profile) {
  return {
    type: types.PROFILE_SET,
    payload: profile
  }
}
