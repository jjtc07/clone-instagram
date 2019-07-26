import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount AddScreen');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Screen AddScreen</Text>
      </View>
    );
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

export default AddScreen;