import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => {
  console.log('fieldNombre props: ', props);

  return(
    <View>
      <TextInput 
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        // value={props.input.value}
        keyboardType={ props.input.name === 'email'? 'email-address':'default' }
        autoCapitalize={ props.input.name === 'email'? 'none':'words' }
        secureTextEntry={ props.input.name.indexOf('password') >= 0 }
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text>}
    </View>
  )
}

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 45) {
    errors.nombre = 'debe ser menor de 45 caracteres';
  }

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

  if (!values.password_confirm) {
    errors.password_confirm = 'requerido';
  } else if (values.password !== values.password_confirm) {
    errors.password_confirm = 'el password debe coincidir';
  }

  return errors;
};

const SignUpForm = props => {
  console.log('SignUpForm props: ', props);
  
  return(
    <View>
      <Field name="nombre" component={fieldNombre} ph="Nombre" />
      <Field name="email" component={fieldNombre} ph="Correo Electronico" />
      <Field name="password" component={fieldNombre} ph="Password" />
      <Field name="password_confirm" component={fieldNombre} ph="Confirmar Password" />
      <Text>Redux Form</Text>
      <Button
        title="Registrar"
        onPress={ props.handleSubmit(values => {console.log('values:', values); })}
      />
    </View>
  )
}

export default reduxForm({form: 'SignUpForm', validate})(SignUpForm);