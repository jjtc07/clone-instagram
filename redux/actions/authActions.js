import { LOGIN, SET_CURRENT_USER, SIGN_OUT } from '../actions/types'

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}