import React, { useState, useEffect } from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../Screens/mainScreen/MainScreen";
import AuthScreen from "../Screens/Auth/AuthScreen";
import { useSelector, useDispatch } from 'react-redux'
import db from '../FireBase/config'
import {authStateChangeUser} from '../Redux/AuthRedux/AuthOperation'


export default function Main() {
  const [isAuth, setIsAuth] = useState(false);
  const stateChange = useSelector(state => state.auth)
  const dispatch = useDispatch()
  console.log('qaz', stateChange);
  // db.auth().onAuthStateChanged((user)=>setIsAuth(user))
  
  useEffect(() => {
    dispatch( authStateChangeUser())
  }, [])
  
  useEffect(() => {
    if (stateChange) {
      setIsAuth(stateChange.stateChange)
    }
    
  }, [stateChange])
  
  return (

  <NavigationContainer>{isAuth ? <MainScreen/>:<AuthScreen/>}</NavigationContainer>

  )
}
