import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import AddScreen from './AddScreen'
import FollowScreen from './FollowScreen'
import ProfileScreen from './ProfileScreen'

const RouterAuth = createBottomTabNavigator(
  {
    Home: HomeScreen,
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
