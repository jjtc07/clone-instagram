import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// importar los reducers
import rootReducer from './reducers';
// redux saga
import funcionPrimaria from './saga'

const sagaMiddleware = createSagaMiddleware();

const initialstate = {};
const store = createStore( rootReducer, initialstate, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(funcionPrimaria)

export default store;