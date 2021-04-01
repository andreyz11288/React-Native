import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

export default function MapScreen({navigation, route}) {

  const [region, setRegion] = useState({"latitude": 45.4196582,
  "longitude": 35.0585301})





  useEffect(() => {
    if (route.params) {
      const { latitude, longitude } = route.params.location
      setRegion({latitude, longitude})
      // console.log(latitude, longitude)
    }
    
  }, [route.params])

  // console.log({...region});
    return (
        <View style={styles.container}>
            <MapView style={{flex:1}} initialRegion={{...region,  latitudeDelta: 0.001, longitudeDelta: 0.006 }} >
              <Marker coordinate={{...region}} ></Marker>
            </MapView>
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
  