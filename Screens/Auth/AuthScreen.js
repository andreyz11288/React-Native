import LoginScreen from "./LoginScreen/LoginScreen";
import RegistrationScreen from "./RegistrationScreen/RegistrationScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import React, { useState } from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";


const AuthStack = createStackNavigator();


export default function AuthScreen({isLogin}) {
  
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={HomeScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Registration'
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  
  
}
