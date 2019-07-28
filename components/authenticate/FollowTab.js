import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import FollowScreen from "./FollowScreen";
import AutorScreen from "./ProfileScreen";
import PublicacionScreen from "./PublicacionScreen";
import ComentariosScreen from "./ComentariosScreen";

const FollowTab = createMaterialTopTabNavigator(
  {
    Follow: FollowScreen,
    Followers: FollowScreen,
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#AAA',
      style: {
        backgroundColor: '#FFF',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#777',
        borderBottomWidth: 2,
      },
    },
  }
)

const FollowStack = createStackNavigator(
  {
    FollowTab: {
      screen: FollowTab,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FFF',
          height: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    Autor: AutorScreen,
    Publicacion: PublicacionScreen,
    Comentarios: {
      screen: ComentariosScreen,
      navigationOptions: {
        title: 'Comentarios',
        // header:null,
        // tabBarVisible: false
      }
    }
  }
)

export default createAppContainer(FollowStack);