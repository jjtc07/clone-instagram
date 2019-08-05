import { createStackNavigator, createAppContainer } from "react-navigation";
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const UnAuthenticate = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
  }
);

export default createAppContainer(UnAuthenticate);