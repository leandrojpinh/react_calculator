import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './pages/HomeScreen';
import SimpleScreen from './pages/SimpleScreen';
import CientificScreen from "./pages/CientificScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Simple: SimpleScreen,
    Cientific: CientificScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}