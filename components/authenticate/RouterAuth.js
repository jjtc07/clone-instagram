import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeStack from './HomeStack'
import searchStack from "./searchStack";
import FollowStack from "./FollowTab";
import AddScreen from './AddScreen'
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

// ocultando el tabBar para la vista de comentarios
searchStack.navigationOptions = ({ navigation }) => {
  const { state: { routes, index } } = navigation;
  let tabBarVisible = true;
  if(routes[index].routeName === 'Comentarios'){
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  }
}

FollowStack.navigationOptions = ({ navigation }) => {
  const { state: { routes, index } } = navigation;
  let tabBarVisible = true;
  if(routes[index].routeName === 'Comentarios'){
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  }
}

const RouterAuth = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Search: searchStack,
    Add: AddScreen,
    Follow: FollowStack,
    Profile: {
      screen: ProfileScreen
    },
  },
  {
    initialRouteName: 'Follow',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(RouterAuth);
