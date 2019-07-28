import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./SearchScreen";
import AutorScreen from "./ProfileScreen";
import PublicacionScreen from "./PublicacionScreen";
import ComentariosScreen from "./ComentariosScreen";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
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
  },
  { 
    initialRouteName : 'Search', 
    navigationOptions : {
      headerStyle : {
        backgroundColor : "#FF0000"
      }
    }
  }
)

export default createAppContainer(SearchStack);