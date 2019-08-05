import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UnAuthenticate from './components/unauthenticate/Router';
import RouterAuth from './components/authenticate/RouterAuth';
// redux
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    console.log('App props.curente_user: ', this.props.current_user);
  }

  render(){
    const { current_user } = this.props;
    return (
      <View style={styles.container}>
        { 
          current_user? 
            <RouterAuth />
          :
            <UnAuthenticate />
        }
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

const mapStateToProps = state => ({
  ...state.authReducer,
})

export default connect(mapStateToProps, null)(App);