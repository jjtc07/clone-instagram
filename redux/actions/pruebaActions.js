import { AGREGAR } from '../actions/types'

export const agregar = (elemento) => {
  return {
    type: AGREGAR,
    payload: elemento
  }
}