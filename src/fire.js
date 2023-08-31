import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPsSRWyxSsYtNhFL4d0K_n00O48H4Sogs",
  authDomain: "auth-213e3.firebaseapp.com",
  projectId: "auth-213e3",
  storageBucket: "auth-213e3.appspot.com",
  messagingSenderId: "568753094793",
  appId: "1:568753094793:web:4df18080ce354c92874658"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=app.firestore()
export default app