import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

class ComentariosScreen extends Component {
  // static navigationOptions = {
  //   //Nav options can be defined as a function of the navigation prop:
  //   headerTitle: 'Events',
  //   headerStyle: { backgroundColor: 'red'},
  //   headerBackTitle: null,
  //   tabBarVisible: false,
  // };

  render(){
    const { navigation } = this.props;
    console.log('*** navigation: ', navigation);
        
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