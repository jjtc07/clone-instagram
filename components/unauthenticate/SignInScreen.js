import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';
import Axios from 'axios';
import { connect } from 'react-redux';
// actions
import { agregar } from '../../redux/actions/pruebaActions'
import { login } from '../../redux/actions/authActions'
import SignInForm from '../forms/SignInForm';

const SignInScreen = props => {
  const [error, setError] = useState(false);
  const { navigation } = props

  // const _handleLogin = form => {
  //   console.log('send api login: ', form);
  //   const { email, password } = form;

  //   console.log('email: ', email);
  //   console.log('password: ', password);
  //   const url = 'http://192.168.1.102:3000/auth/sign_in';

  //   Axios.post(url, {
  //     email, //'jesustc17@gmail.com',
  //     password //'20380124'
  //   }).then(response => {
  //     // Respuesta del servidor
  //     console.log('todo bien: ')
  //     const { headers, data } = response
  //     const { client, uid, "access-token": accessToken } = headers;

  //     const user = data.data;

  //     console.log('data: ', data);
  //     // console.log('user: ', user);
  //     // console.log('email: ', user.email);
      
  //     console.log('access-token: ', accessToken)
  //     console.log('client: ', client)
  //     console.log('uid: ', uid)

  //     // const token = {
  //     //   accessToken,
  //     //   client,
  //     //   uid
  //     // };

  //     // this.props.authSuccess(user, token )
  //     setError(false)
  //   }).catch(e => {
  //     console.log('paso un error: ')
  //     console.log(e);
  //     setError(true)
  //   });
    
  // }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Componente SignIn { error? 'true': 'false' }</Text>
      <SignInForm
        login={props.login}
        hasError={error}
      />
      <Button 
        title='Ir a SignUp'
        onPress={ () => navigation.navigate('SignUp') }
      />
    </View> 
  )
}

const mapStateToProps = state => ({
  numero: state.pruebaReducer,
})

export default connect(mapStateToProps, { agregar, login })(SignInScreen)