
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import db from '../../FireBase/config'
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";



export default function CreateScreen({navigation}) {

  const [getCamera, setGetCamera] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [comment, setComment] = useState('')
  const [location, setLocation] = useState(null)
  const [processedPhoto, setProcessedPhoto] = useState(null)
  
const {userId, nickname} = useSelector(state => state.auth)

    useEffect(() => {
    (async () => {
        await Camera.requestPermissionsAsync();
       await Location.requestPermissionsAsync();
     
      const location = await Location.getCurrentPositionAsync({});;
      setLocation(location)
    })();      
  }, []);


  const isPhoto = async () => {

    
        const {uri} = await getCamera.takePictureAsync();      
        setPhoto(uri);
        
        uploadPhotoToServer()
        // console.log(processedPhoto);
  }

  const sendPhoto = ()=>{

  navigation.navigate('PostsCommMap',{photo})  

  uploadPostToServer()
  }

  const uploadPostToServer = async () => {
     console.log(processedPhoto, comment, location.coords, userId, nickname);
    const createPost = await db.firestore().collection('posts').add({processedPhoto, comment, location: location.coords, userId, nickname})

    
  }


  const uploadPhotoToServer = async () => {
    const resp = await fetch(photo)
    const file = await resp.blob() 
    const uniquePostId = Date.now().toString()
    await db.storage().ref(`postImage/${uniquePostId}`).put(file)

    const processedPhoto = await db.storage().ref("postImage").child(uniquePostId).getDownloadURL()
    setProcessedPhoto(processedPhoto)
    
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.conCamera}  ref={setGetCamera}>
        {photo && <View style={styles.photoViewContainer}>
          <Image style={styles.img} source={{uri: photo}}/>
        </View>}
        <TouchableOpacity style={styles.btn} onPress={isPhoto}>
          <Text style={styles.text}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setComment}/>
        </View>
      <TouchableOpacity style={styles.btnSend} onPress={sendPhoto}>
          <Text style={styles.textSend}>SEND</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conCamera:{
    // flex:1,
    marginHorizontal:5,
    marginTop:30,
    height:'80%',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  btn:{
    width:80,
    borderWidth:2,
    borderRadius:50,
    borderColor:'#ff0000',
    height:80,
    marginBottom:20,
    justifyContent:'center',
  },
  text: {
    textAlign:'center',
    color: "#fff",
    fontSize: 20,
  },
  photoViewContainer:{
    position:'absolute',
    top:0,
    left:0,
    borderColor:'#ff0000',
    borderWidth:2,
    marginLeft:10,
    marginTop:30,
  },
  img:{
    
    width:200,
    height:200,
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
    marginTop:10
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

