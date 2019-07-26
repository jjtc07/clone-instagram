import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SearchScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount SearchScreen');
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Screen SearchScreen</Text>
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

export default SearchScreen;