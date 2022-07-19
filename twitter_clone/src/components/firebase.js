import { initializeApp } from "firebase/app";
// import { getFirestore,collection,getDocs } from 'firebase/firestore/lite';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
 
const firebaseConfig = {
  apiKey: "AIzaSyCeIWj6-uCpWAvvXhB6viF9U8KcPok8PTg",
  authDomain: "twitter-clonex.firebaseapp.com",
  projectId: "twitter-clonex",
  storageBucket: "twitter-clonex.appspot.com",
  messagingSenderId: "296551011656",
  appId: "1:296551011656:web:f29135814ec4c3fbb94f7d",
  measurementId: "G-116XLMZ2M2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
