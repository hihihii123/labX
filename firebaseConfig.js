// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAmHjjWsZaa3FI99OBqvQAYBwkJ50jyuLE",
  authDomain: "labx-sst.firebaseapp.com",
  projectId: "labx-sst",
  storageBucket: "labx-sst.appspot.com",
  messagingSenderId: "482050813272",
  appId: "1:482050813272:web:d74abc620a7113a3f7092d",
  databaseURL: ""
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const FIREBASE_APP_MOBILE = firebase.app();
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage();
export const FIREBASE_STORAGEREF = ref(FIREBASE_STORAGE);
