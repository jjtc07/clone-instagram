import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ProfileScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount ProfileScreen');
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Screen ProfileScreen</Text>
        <Button
          title='Ir a Publicaciones'
          onPress={ () => navigation.navigate('Publicacion') }
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

export default ProfileScreen;