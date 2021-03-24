import MapScreen from './MapScreen'
import CommentsScreen from './CommentsScreen'
import PostsScreen from '../PostsScreen'
import React from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";


const PostsStack = createStackNavigator();


export default function PostsCommMapScreen({navigation}) {
  
    return (
      <PostsStack.Navigator>
        <PostsStack.Screen
          options={{ headerShown: false }}
          name='Posts'
          component={PostsScreen}
        />
        <PostsStack.Screen
          options={{ headerShown: false }}
          name='Map'
          component={MapScreen}
        />
        <PostsStack.Screen
          options={{ headerShown: false }}
          name='Comments'
          component={CommentsScreen}
        />
      </PostsStack.Navigator>
    );
  
  
}
