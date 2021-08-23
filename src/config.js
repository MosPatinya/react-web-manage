import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage'
import 'firebase/firestore'


const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAoTJEgzD25SIVmc6TV1rFQsPETT8yUpuo",
    authDomain: "whereruu-46512.firebaseapp.com",
    databaseURL: "https://whereruu-46512-default-rtdb.firebaseio.com",
    projectId: "whereruu-46512",
    storageBucket: "whereruu-46512.appspot.com",
    messagingSenderId: "150764768721",
    appId: "1:150764768721:web:395fbe1e530c6ac39564f0",
    measurementId: "G-F4333FRJZS"
  }); 


  export const storage = firebase.storage();
  export default firebaseConfig;
  
 