import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

class ComentariosScreen extends Component {
  render(){
    return(
      <View style={styles.container} >
        <Text>ComentariosScreen</Text>
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

export default ComentariosScreen;