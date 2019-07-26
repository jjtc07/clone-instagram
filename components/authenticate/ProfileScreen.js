import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ProfileScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount ProfileScreen');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Screen ProfileScreen</Text>
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

export default ProfileScreen;