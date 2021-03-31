import * as firebase from "firebase";
import "firebase/auth";
import 'firebase/storage'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC1IZ1iBSrF6OE4_78_ewRHAjEES9xrbWw",
    authDomain: "reactnativ2.firebaseapp.com",
    projectId: "reactnativ2",
    storageBucket: "reactnativ2.appspot.com",
    messagingSenderId: "251655566550",
    appId: "1:251655566550:web:095325bb6ffdfcc9358577",
    measurementId: "G-GC6SF457XN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


   export default firebase