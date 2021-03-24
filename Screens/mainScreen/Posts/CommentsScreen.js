import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CommentsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity  style={{width: 250}} >
    <Text style={{...styles.text, textAlign:'center'}} onPress={() => navigation.navigate('Posts')}>Go to back</Text>
    </TouchableOpacity>
            <View style={styles.textHero}><Text style={{...styles.text, fontSize:50}}>CommentsScreen</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: "center",
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
    textHero:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
  });
  