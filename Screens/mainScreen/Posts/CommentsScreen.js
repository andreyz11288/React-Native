import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import db from "../../../FireBase/config";


export default function CommentsScreen({route}) {
  const [comment, setComment] = useState('')
  const [allComments, setAllComments] = useState([])

  const {nickname} = useSelector(state => state.auth)

  useEffect(() => {
    getAllPost()
  },[])

  const {postId} = route.params


  const createPost = async ()=> {
    db.firestore().collection("posts").doc(postId).collection("comments").add({ comment, nickname })
    setComment('')
  }

  const getAllPost = async () => {
     db.firestore().collection("posts").doc(postId).collection("comments").onSnapshot((data) => setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })
        )))
  }

    return (
      <View style={styles.container}>
         <SafeAreaView style={styles.container}>
      <FlatList
        data={allComments}
            renderItem={({ item }) => (<View style={styles.commentContainer}><Text>{ item.nickname}: {item.comment}</Text></View>)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  commentContainer:{
  borderWidth: 1,
    borderColor: '#000',
  borderRadius:10,
    padding: 5,
    marginHorizontal: 10,
    marginTop:5
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
  