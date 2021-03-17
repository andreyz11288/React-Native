import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, secureTextEntry, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';


// const initial = {
//   email: '',
//   password:''
// }
const loadApp = async () => {
  await Font.loadAsync({
    'DancingScript-Regular':require('./assets/Fonts/DancingScript-Regular.ttf')
  })
}

export default function App() {

  const [isKeyboard, setIsKeyboard] = useState(false)
  // const [state, setState] = useState(initial)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const stateString = () => {
    setEmail('');
    setPassword('')
  }
  const pressButton = () => {
    setIsKeyboard(false); Keyboard.dismiss(); console.log(email, password); stateString()
  }

  return (
      <TouchableWithoutFeedback onPress={()=>{setIsKeyboard(false); Keyboard.dismiss()}}>
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require('./assets/img/photo.jpg')}>
        <View style={{ ...styles.form, marginBottom: isKeyboard ? 10 : 100 }}>
          <View style={{...styles.header, height: isKeyboard ? '30%' :'50%'}}>
            <Text style={styles.headerText}>Hello word</Text>
            <Text style={styles.headerText}>welcome back</Text>
          </View>
          <View>
            <Text style={styles.text}> Login</Text>
            <TextInput value={email} onChangeText={(val)=>{setEmail(val)}} style={styles.input} onFocus={()=>{setIsKeyboard(true)}}/>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.text}> Password</Text>
            <TextInput value={password} onChangeText={(val)=>{setPassword(val)}} secureTextEntry={true} style={styles.input} onFocus={()=>{setIsKeyboard(true)}}/>
          </View>
            <TouchableOpacity onPress={pressButton} activeOpacity={0.5} style={styles.btn}><Text style={styles.btnText}>Log in</Text></TouchableOpacity>
        </View>
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center'
    justifyContent:'flex-end'
  },
  form: {
    marginHorizontal: 20,
  },
  header: {
    // height: '50%',
    justifyContent:'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    textAlign:'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,

  },
  input: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    height: 40,
    color: "#fff",
    textAlign:'center'
  },
  btn: {
    marginTop:40,
    height: 40,
    backgroundColor: `#0000cd`,
    justifyContent: 'center',
    borderRadius: 10,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
    
  },
});
