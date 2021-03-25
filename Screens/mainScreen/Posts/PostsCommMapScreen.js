import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";



export default function PostsCommMapScreen({navigation, route}) {
  
  const [posts, setPosts] = useState([])
  const [region, setRegion] = useState({"latitude": 45.4196582,
  "longitude": 35.0585301})
  

  useEffect(() => {
   if (route.params) {
     setPosts(prev=>[...prev, route.params])
     setRegion(Object.values(route.params)[0]);
    }
   
    
  }, [route.params])
  
// console.log(region);
    return (
      <View style={styles.container}>
    <FlatList 
    data={posts} 
    keyExtractor={(item, index) => index.toString()} 
    renderItem={({item}) =>(<View style={styles.imgView}><Image style={styles.image} source={{uri:item.photo}}/></View>)} />     
    <TouchableOpacity  style={{width: 250, alignSelf:'center'}} >
      <Text style={{...styles.text, textAlign:'center'}} onPress={() =>  navigation.navigate('Map',{region})
    }>Go to Map</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={{width: 250, alignSelf:'center'}} >
    <Text style={{...styles.text, textAlign:'center'}} onPress={() => navigation.navigate('Comments')}>Go to Comments</Text>
    </TouchableOpacity>
    </View>
    );
  
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop:30,   
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
  text: {
    fontSize: 25,
    fontWeight: "900",
    color: "#000000",
    // textAlign: "center",
    marginBottom: 10,
    fontFamily: "DancingScript-Regular",
  },
});