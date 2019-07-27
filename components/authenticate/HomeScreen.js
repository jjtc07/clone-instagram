import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount HomeScreen');
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Screen HomeScreen</Text>
        <Button
          title='Ir a Autor'
          onPress={ () => navigation.navigate('Autor') }
        />
        <Button
          title='Ir a Comentarios'
          onPress={ () => navigation.navigate('Comentarios') }
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

export default HomeScreen;