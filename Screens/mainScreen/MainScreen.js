
import React from "react";
import {} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreateScreen from "./CreateScreen";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function MainScreen(eve) {
   
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

