// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDse2pw83BJl5VUYZKYI9JSPc5YGfSIPAE",
  authDomain: "papafam-hackathon.firebaseapp.com",
  projectId: "papafam-hackathon",
  storageBucket: "papafam-hackathon.appspot.com",
  messagingSenderId: "58674693058",
  appId: "1:58674693058:web:f7029d51880db9a5bb8c5b"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



export {
  auth,
  db,
  app,
  useAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
};
