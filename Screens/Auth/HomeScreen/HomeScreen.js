import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";


export default function HomeScreen({navigation}) {
    
        return (
             <View style={styles.container}>
         <ImageBackground
          style={styles.img}
          source={require("../../../assets/img/photo.jpg")}
                >
                    <View style={styles.block}>

                    <View >

                <Text style={styles.headerText}>Hello</Text>
                    </View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                        >
                    <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                        >
                    <Text style={styles.text} onPress={() => navigation.navigate('Registration')}>Registration</Text>
                    </TouchableOpacity>
                    </View>
                    </ImageBackground> 
            </View> 
        );
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    img: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center'
    },
    
    headerText: {
        color: "#fff",
        fontSize: 50,
        textAlign: "center",
        fontFamily: "DancingScript-Regular",
        marginBottom: 50,
    },
    text: {
        fontSize: 25,
        fontWeight: "900",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
        fontFamily: "DancingScript-Regular",
    },
})