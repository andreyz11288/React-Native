import LoginScreen from "./Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./Auth/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./Auth/HomeScreen/HomeScreen";
import React, { useState } from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./mainScreen/PostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";
import CreateScreen from "./mainScreen/CreateScreen";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainScreen(eve) {
  if (!eve) {
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
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='postage-stamp'
              size={size}
              color={color}
            />
          ),
        }}
        name='Post'
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name='pluscircleo' size={size} color={color} />
          ),
        }}
        name='Create'
        component={CreateScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='face-profile'
              size={size}
              color={color}
            />
          ),
        }}
        name='Profile'
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
