import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';

class PublicacionScreen extends Component {
  render(){
    const { navigation } = this.props;
    return(
      <View style={styles.container} >
        <Text>PublicacionScreen</Text>
        <Button
          title='Ir a Comentarios'
          onPress={ () => navigation.navigate('Comentarios') }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PublicacionScreen;