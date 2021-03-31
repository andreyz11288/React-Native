import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { authSingUp } from "../../../Redux/AuthRedux/AuthOperation";
import { useDispatch } from "react-redux";



export default function RegistrationScreen({ navigation }) {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const state = {login, email, password}

  const dispatch = useDispatch()

  const stateString = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };
  const pressButton = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSingUp(state))
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
          <View style={{ ...styles.form, marginBottom: isKeyboard ? 5 : 50 }}>
            <View
              style={{
                ...styles.header,
                display: isKeyboard ? "none" : "flex",
              }}
            >
              <Text style={styles.headerText}>Registration Screen</Text>
            </View>
            <TouchableOpacity style={{ width: 50 }} activeOpacity={0.5}>
              <Text
                style={{ ...styles.text, textAlign: "left" }}
                onPress={() => navigation.navigate("Home")}
              >
                Home
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.text}> Login</Text>
              <TextInput
                value={login}
                onChangeText={(val) => {
                  setLogin(val);
                }}
                style={styles.input}
                onFocus={() => {
                  setIsKeyboard(true);
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
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
            <View style={{ marginTop: 10 }}>
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
              <Text style={styles.btnText}>Sing up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              ouchableOpacity
              style={{ width: 110, marginLeft: "auto" }}
              activeOpacity={0.5}
            >
              <Text
                style={{ ...styles.text, paddingTop: 20 }}
                onPress={() => navigation.navigate("Login")}
              >
                Go to Login
              </Text>
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
    justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 20,
  },
  header: {
    paddingTop: 30,
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
    marginBottom: 5,
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
