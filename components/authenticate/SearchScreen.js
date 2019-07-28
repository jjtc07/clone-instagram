import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class SearchScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount SearchScreen');
  }
  
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Screen SearchScreen</Text>
        <Button
          title='Ir a Autor'
          onPress={ () => navigation.navigate('Autor') }
        />
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