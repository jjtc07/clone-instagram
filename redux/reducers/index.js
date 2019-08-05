import { combineReducers } from 'redux';
import pruebaReducer from './pruebaReducer';
import { reducer as form } from 'redux-form'

export default combineReducers({
  pruebaReducer,
  form
});