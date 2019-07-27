import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeStack from './HomeStack'
import SearchScreen from './SearchScreen'
import AddScreen from './AddScreen'
import FollowScreen from './FollowScreen'
import ProfileScreen from './ProfileScreen'

// ocultando el tabBar para la vista de comentarios
HomeStack.navigationOptions = ({ navigation }) => {
  const { state: { routes, index } } = navigation;
  let tabBarVisible = true;
  if(routes[index].routeName === 'Comentarios'){
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  }
}

const RouterAuth = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Search: SearchScreen,
    Add: AddScreen,
    Follow: FollowScreen,
    Profile: {
      screen: ProfileScreen
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(RouterAuth);
