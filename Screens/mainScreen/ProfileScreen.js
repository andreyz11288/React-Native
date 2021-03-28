import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import db from '../../FireBase/config'
import { authSingOut} from '../../Redux/AuthRedux/AuthOperation'
import { useDispatch } from 'react-redux'


export default function ProfileScreen() {

  const dispatch = useDispatch()

  const exitPress = () =>{
   dispatch(authSingOut())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={exitPress}><Text style={styles.textBtn}>Exit</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 50,
  },
  btnContainer:{
    flex:1,
    position:'absolute',
    right:20,
    bottom:20,
  },
  btn:{
    
    width:70,
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:10,
    alignItems:'center'

  },
  textBtn:{
    fontSize:20,
    padding:5,
  }
});
