import React, { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
// import MainScreen from "./Screens/Routing";
import MainScreen from "./Screens/mainScreen/MainScreen";
import AuthScreen from "./Screens/Auth/AuthScreen";
import { Provider } from 'react-redux'
import {store} from './Redux/store'


const loadApp = async () => {
  await Font.loadAsync({
    "DancingScript-Regular": require("./assets/Fonts/DancingScript-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  
  

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }
  const isLogin = (event) => {
    setIsAuth(event);
  };
  return (
  <Provider store={store}>
  <NavigationContainer>{isAuth ? <MainScreen/>:<AuthScreen/>}</NavigationContainer>
  </Provider>)
}
