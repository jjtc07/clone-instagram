import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Component App</Text>
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