import React, { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Main from './Component/Main'
import { Provider } from 'react-redux'
import {store} from './Redux/store'


const loadApp = async () => {
  await Font.loadAsync({
    "DancingScript-Regular": require("./assets/Fonts/DancingScript-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

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
  
  return (
  <Provider store={store}>
  <Main/>
  </Provider>)
}
