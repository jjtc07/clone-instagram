import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UnAuthenticate from './components/unauthenticate/Router';
import RouterAuth from './components/authenticate/RouterAuth';

class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        {/* <UnAuthenticate /> */}
        <RouterAuth />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});


export default App;