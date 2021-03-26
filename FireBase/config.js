import * as firebase from "firebase";
import "firebase/auth";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvnim0sC7kDv1YdTeZYiYUXzSgaFXB3eE",
    authDomain: "reactnative-9b3ba.firebaseapp.com",
    projectId: "reactnative-9b3ba",
    storageBucket: "reactnative-9b3ba.appspot.com",
    messagingSenderId: "162720715000",
    appId: "1:162720715000:web:533b358779f6ae34e9eb0d"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase