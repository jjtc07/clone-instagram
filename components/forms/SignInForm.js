import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => {
  // console.log('fieldNombre props: ', props);
  const { name } = props.input;
  return(
    <View>
      <TextInput 
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        // value={props.input.value}
        keyboardType={ name === 'email'? 'email-address':'default' }
        autoCapitalize={ name === 'email'? 'none':'words' }
        secureTextEntry={ name.indexOf('password') >= 0 }
        onBlur={props.input.onBlur}
        autoFocus={ name === 'email'? true : false }
        // defaultValue={ name === 'email'? 'jesustc17@gmail.com': '20380124' }

      />
      {props.meta.touched && props.meta.error && <Text style={styles.red} >{props.meta.error}</Text>}
    </View>
  )
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'debe ser menor de 15 caracteres';
  }

  return errors;
};

const SignInForm = props => {
  // console.log('SignInForm props: ', props);

  const _renderError = () => {
    const { hasError } = props
    if (hasError) {
      return(
        <Text style={styles.red}>
          Datos Invalidos
        </Text>
      )
    } 

    return;
  }

  return(
    <View>
      <Field name="email" component={fieldNombre} ph="Correo Electronico" />
      <Field name="password" component={fieldNombre} ph="Password" />

      {_renderError()}
      
      <Button
        title="Entrar"
        // onPress={ props.handleSubmit(values => {console.log('values:', values); })}
        onPress={props.handleSubmit(props.login)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  red: {
    color: '#FF0000'
  }
})

export default reduxForm({form: 'SignInForm', validate})(SignInForm);