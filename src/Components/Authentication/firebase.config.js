// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyBtpMSKLlp7KWb5p2fPHsdEMFWhQSxw4bE",
  authDomain: "foodie-9960c.firebaseapp.com",
  projectId: "foodie-9960c",
  storageBucket: "foodie-9960c.appspot.com",
  messagingSenderId: "639016117303",
  appId: "1:639016117303:web:46659b78a5f2a6b7e70bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app