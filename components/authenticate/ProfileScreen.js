import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// redux
import { connect } from 'react-redux';
//actions
import { signOut } from '../../redux/actions/authActions'

class ProfileScreen extends React.Component {

  componentDidMount(){
    console.log('componentDidMount ProfileScreen');
    console.log('ProfileScreen props: ', this.props);
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

        <Button
          title='Salir'
          onPress={ () => this.props.signOut() }
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

const mapStateToProps = state => ({
  ...state.authReducer
})

export default connect(mapStateToProps, { signOut } )(ProfileScreen);