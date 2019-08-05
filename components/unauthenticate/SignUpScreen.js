import React from 'react';
import {Text, View, Button } from 'react-native';
import SignUpForm from '../forms/SignUpForm';
// redux
import { connect } from 'react-redux'

const SignUpScreen = props => {
  const { navigation } = props
  console.log('state prueba: ', props);
  

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Componente SignUp</Text>
      <SignUpForm />
      <Button 
        title='Volver'
        onPress={ () => navigation.goBack() }
      />
    </View>
  )
};

const mapStateToProps = state => {

  return {
    numero: state
  };
}

export default connect(mapStateToProps, null)(SignUpScreen);