import {
  LOGIN, LOGOUT
} from '../constants'

export function login(action) {
  return {
    type: LOGIN,
    payload: action.payload
  }
}

export function logout(action) {
  return {
    type: LOGOUT,
    payload: action.payload
  }
}
