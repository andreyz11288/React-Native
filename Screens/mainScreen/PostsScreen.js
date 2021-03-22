import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function PostsScreen({ navigation, route }) {
  console.log(route.params);
  const [posts, setPosts] = useState([])

  useEffect(() => {
   if (route.params) {
     setPosts(prev=>[...prev, route.params])
   }
    
  }, [route.params])

  return (
    <View style={styles.container}>
    <FlatList 
    data={posts} 
    keyExtractor={(item, index) => index.toString()} 
    renderItem={({item}) =>(<View style={styles.imgView}><Image style={styles.image} source={{uri:item.photo}}/></View>)} />     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2f4f4f",
    justifyContent: "center",
    // alignItems: "center",
   
  },
  imgView: {
   justifyContent:'center',
   alignItems:'center',
   marginBottom:10,
  },
  image:{
    width:'90%',
    height:200,
  }
});
