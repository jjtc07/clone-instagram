import { combineReducers } from 'redux';
import pruebaReducer from './pruebaReducer';
import authReducer from './authReducer';
import { reducer as form } from 'redux-form'

export default combineReducers({
  pruebaReducer,
  authReducer,
  form, 
});