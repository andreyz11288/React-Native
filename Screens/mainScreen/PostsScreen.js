
import MapScreen from './Posts/MapScreen'
import CommentsScreen from './Posts/CommentsScreen'
import PostsCommMapScreen from './Posts/PostsCommMapScreen'
import React, {useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";


const PostsStack = createStackNavigator();


export default function PostsScreen() {


  return (
    <PostsStack.Navigator>
        <PostsStack.Screen
          options={{ headerShown: true }}
          name='PostsCommMap'
          component={PostsCommMapScreen}
        />
        <PostsStack.Screen
          options={{ headerShown: true }}
          name='Map'
          component={MapScreen}
        />
        <PostsStack.Screen
          options={{ headerShown: true }}
          name='Comments'
          component={CommentsScreen}
        />
      </PostsStack.Navigator>   
  );
}

