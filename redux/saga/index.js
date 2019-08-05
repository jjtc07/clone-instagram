import { takeEvery, call } from 'redux-saga/effects';
import { LOGIN } from '../actions/types';
import Axios from 'axios';

const registroEnApi = ({email, password}) => 
    Axios.post('http://192.168.1.102:3000/auth/sign_in', {
      email, //'jesustc17@gmail.com',
      password //'20380124'
    }).then( success => success )
    /*
    .then(response => {
      // Respuesta del servidor
      console.log('todo bien: ')
      const { headers, data } = response
      const { client, uid, "access-token": accessToken } = headers;

      const user = data.data;

      console.log('data: ', data);
      // console.log('user: ', user);
      // console.log('email: ', user.email);
      
      console.log('access-token: ', accessToken)
      console.log('client: ', client)
      console.log('uid: ', uid)

      // const token = {
      //   accessToken,
      //   client,
      //   uid
      // };
    }).catch(e => {
      console.log('paso un error: ')
      console.log(e);
    });
    */

function* generadoraLogin(values){
  try {
    const login = yield call(registroEnApi, values.payload)
    
    console.log('generadoraLogin login: ', login)
    // console.log('generadoraLogin values: ', values)
  } catch (error) {
    console.log('generadoraLogin error: ', error)
  }
}

export default function* funcionPrimaria(){
  yield takeEvery(LOGIN, generadoraLogin)
  console.log('desde la saga generadora');
}