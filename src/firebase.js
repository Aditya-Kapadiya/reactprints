// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7hD48MvPluj2yadDBl0b-PZ0FtriCvIw",
  authDomain: "printkar-42598.firebaseapp.com",
  projectId: "printkar-42598",
  storageBucket: "printkar-42598.appspot.com",
  messagingSenderId: "1007479781195",
  appId: "1:1007479781195:web:5bbead2f304689b038dace",
  measurementId: "G-BJTF6ELM1C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}

export default db;