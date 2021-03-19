
import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./Screens/Auth/HomeScreen/HomeScreen";
import React, { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

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
  
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen} />
        <AuthStack.Screen options={{headerShown: false}} name='Registration' component={RegistrationScreen} />
      </AuthStack.Navigator>
     </NavigationContainer>
      
  );
}

