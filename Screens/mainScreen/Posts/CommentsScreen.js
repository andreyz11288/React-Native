import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useSelector } from 'react-redux';
import db from "../../../FireBase/config";


export default function CommentsScreen({route}) {
  const [comment, setComment] = useState('')

  const {nickname} = useSelector(state => state.auth)


  const {postId} = route.params


  const createPost = async ()=> {
    db.firestore().collection("posts").doc(postId).collection("comments").add({ comment, nickname })
    setComment('')
  }

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={comment} onChangeText={setComment} />
        </View>  
      <TouchableOpacity style={styles.btnSend} >
          <Text style={styles.textSend} onPress={createPost}>Add Post</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop:30,   
    },
   
 
    btnSend:{
    width:120,
    borderWidth:2,
    borderRadius:30,
    borderColor:'#ff0000',
    height:60,
    marginBottom:20,
    justifyContent:'center',
    marginLeft:"auto",
    marginRight:'auto',
    marginTop:20
  },
  textSend:{
    textAlign:'center',
    color: "#000000",
    fontSize: 20,
  },
  inputContainer:{
    marginHorizontal:10,
  },
  input:{
    height:50,
    borderBottomColor:'#000',
    borderBottomWidth:1
  },
  });
  