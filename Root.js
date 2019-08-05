// import React from "react";
// // import { View, Text } from "react-native";
// // import { createStackNavigator, createAppContainer } from "react-navigation";
// import { Provider } from 'react-redux';
// import store from './redux/store';

// import App from "./App";
// import { Root } from "native-base";

// // const AppNavigator = createStackNavigator({
// //   Home: {
// //     screen: App
// //   }
// // });

// // export default createAppContainer(AppNavigator);

// export default () =>
//   <Root>
//     <Provider store={store} >
//       <App />
//     </Provider>
//   </Root>;

import React from "react";
import store from './redux/store';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
//
import App from './App';

const Root = () =>
    <Provider store={store} >
      <App />
    </Provider>

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Root);
