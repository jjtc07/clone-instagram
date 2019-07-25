import React from "react";
// import { View, Text } from "react-native";
// import { createStackNavigator, createAppContainer } from "react-navigation";

import App from "./App";
import { Root } from "native-base";

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: App
//   }
// });

// export default createAppContainer(AppNavigator);

export default () =>
  <Root>
    <App />
  </Root>;