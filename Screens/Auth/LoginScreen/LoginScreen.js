// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  secureTextEntry,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";



export default function LoginScreen({navigation}) {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const stateString = () => {
    setEmail("");
    setPassword("");
  };
  const pressButton = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
    console.log(email, password);
    stateString();
  };

  

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require("../../../assets/img/photo.jpg")}
        >
          <View style={{ ...styles.form, marginBottom: isKeyboard ? 10 : 100 }}>
            <View
              style={{ ...styles.header, height: isKeyboard ? "30%" : "50%" }}
            >
              <Text style={styles.headerText}>Hello word</Text>
              <Text style={styles.headerText}>welcome back</Text>
            </View>
             <TouchableOpacity  style={{width: 50}} activeOpacity={0.5}>
                    <Text style={{...styles.text, textAlign:'left'}} onPress={() => navigation.navigate('Home')}>Home</Text>
                </TouchableOpacity>
            <View>
              <Text style={styles.text}> Email</Text>
              <TextInput
                value={email}
                onChangeText={(val) => {
                  setEmail(val);
                }}
                style={styles.input}
                onFocus={() => {
                  setIsKeyboard(true);
                }}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}> Password</Text>
              <TextInput
                value={password}
                onChangeText={(val) => {
                  setPassword(val);
                }}
                secureTextEntry={true}
                style={styles.input}
                onFocus={() => {
                  setIsKeyboard(true);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={pressButton}
              activeOpacity={0.5}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width:140, marginLeft:'auto',}}
              // activeOpacity={0.5}
            >
                    <Text style={{...styles.text,   paddingTop:20, }} onPress={() => navigation.navigate('Registration')}>Go to Sing Up</Text>
                </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    // justifyContent: 'center'
    justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 20,
  },
  header: {
    // height: '50%',
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "DancingScript-Regular",
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "DancingScript-Regular",
  },
  input: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    height: 40,
    color: "#fff",
    textAlign: "center",
    fontFamily: "DancingScript-Regular",
    fontWeight: "900",
    fontSize: 20,
  },
  btn: {
    marginTop: 40,
    height: 40,
    backgroundColor: `#0000cd`,
    justifyContent: "center",
    borderRadius: 10,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "DancingScript-Regular",
  },
});
