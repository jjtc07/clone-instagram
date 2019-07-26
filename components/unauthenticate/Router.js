import React from 'react';
import {Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const SignInScreen = props => {
  const { navigation } = props

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Componente SignIn</Text>
      <Button 
        title='Ir a SignUp'
        onPress={ () => navigation.navigate('SignUp') }
      />
    </View>
  )
}

const SignUpScreen = props => {
  const { navigation } = props

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Componente SignUp</Text>
      <Button 
        title='Volver'
        onPress={ () => navigation.goBack() }
      />
    </View>
  )
};

const UnAuthenticate = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(UnAuthenticate);