import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import AutorScreen from "./ProfileScreen";
import PublicacionScreen from "./PublicacionScreen";
import ComentariosScreen from "./ComentariosScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Autor: AutorScreen,
    Publicacion: PublicacionScreen,
    Comentarios: {
      screen: ComentariosScreen,
      navigationOptions: {
        title: 'Comentarios',        
      }
    }
  },
  { 
    initialRouteName : 'Home', 
    navigationOptions : {
      headerStyle : {
        backgroundColor : "#FF0000"
      }
    }
  }
)

export default createAppContainer(HomeStack);