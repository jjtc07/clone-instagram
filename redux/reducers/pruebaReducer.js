import { AGREGAR } from '../actions/types'

const initialState = [12, 22, 32]

export default ( state = initialState, action ) => {
  switch (action.type) {
    case AGREGAR:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}