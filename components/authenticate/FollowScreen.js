import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FollowScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount FollowScreen');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Screen FollowScreen</Text>
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

export default FollowScreen;