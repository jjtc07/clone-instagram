import { REGISTRO, LOGIN, SET_CURRENT_USER, SIGN_OUT } from '../actions/types'

const initialState = {
  current_user: null
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case LOGIN:
      console.log('reducer type login state: ', state )
      console.log('reducer type login action: ', action )
      return {
        ...state,
        // current_user: action.payload
      }
    case SET_CURRENT_USER:
      // console.log('reducer type SET_CURRENT_USER state: ', state )
      // console.log('reducer type SET_CURRENT_USER action: ', action )
      return {
        ...state,
        current_user: action.payload
      }
    case SIGN_OUT:
      return {
        ...state,
        current_user: null
      }
    case REGISTRO:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}