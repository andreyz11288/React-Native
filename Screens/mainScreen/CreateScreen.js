
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";

export default function CreateScreen({navigation}) {

  const [getCamera, setGetCamera] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)
  const [region, setRegion] = useState(null)
  // const [location, setLocation] = useState(null);
  


    useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
       await Location.requestPermissionsAsync();
      // setLocation(stat === "granted")
    })();      
  }, []);


  const isPhoto = async () => {
    
      
      if (hasPermission) {
        const uri = await getCamera.takePictureAsync();      
        setPhoto(uri.uri);
        
        
      }
    
      
    
      const locat = await Location.getCurrentPositionAsync({});;
      
      const coords = {
        latitude: locat.coords.latitude,
        longitude: locat.coords.longitude,
      };
      setRegion(coords)
    
  }

  const sendPhoto = ()=>{
    if (region) {
      navigation.navigate('PostsCommMap',{region})
    }
if (photo) {
  navigation.navigate('PostsCommMap',{photo})  
}
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
  }
});

