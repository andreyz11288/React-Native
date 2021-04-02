import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import db from '../../FireBase/config'
import { authSingOut} from '../../Redux/AuthRedux/AuthOperation'
import { useDispatch, useSelector } from 'react-redux'


export default function ProfileScreen() {

  const [allPostsUser, setAllPostsUser] = useState([])

  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.auth)
 


  useEffect(() => {
    postUser()
  },[])

  const exitPress = () =>{
   dispatch(authSingOut())
  }

  const postUser = async () => {
    await db.firestore().collection('posts').where('userId', "==", userId)
      .onSnapshot((data) => setAllPostsUser(data.docs.map((doc) => ({ ...doc.data() }))))
  }



  return (
    <View style={styles.container}>
      <FlatList 
        data={allPostsUser}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (<View style={styles.imgView}><Image style={styles.image} source={{ uri: item.response }} />
        </View>)} />
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
    // alignItems: "center",
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
  },
  imgView: {
   justifyContent:'center',
   alignItems:'center',
   marginBottom:10,
  },
  image:{
    width:'90%',
    height:200,
  },
});
