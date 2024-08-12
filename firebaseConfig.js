import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import auth, { firebase } from '@react-native-firebase/auth';
import { Platform } from "react-native";

export const firebaseConfig = {
  apiKey: "AIzaSyAmHjjWsZaa3FI99OBqvQAYBwkJ50jyuLE",
  authDomain: "labx-sst.firebaseapp.com",
  projectId: "labx-sst",
  storageBucket: "labx-sst.appspot.com",
  messagingSenderId: "482050813272",
  appId: "1:482050813272:web:d74abc620a7113a3f7092d",
  databaseURL: ""
};

let FIREBASE_APP_MOBILE;
let FIREBASE_APP;
let FIREBASE_AUTH;
let FIREBASE_DB;
let FIREBASE_STORAGE;
let FIREBASE_STORAGEREF;

if (Platform.OS === 'web') {
  if (!getApps().length) {
    FIREBASE_APP = initializeApp(firebaseConfig);
    FIREBASE_AUTH = getAuth(FIREBASE_APP);
    FIREBASE_DB = getFirestore(FIREBASE_APP);
    FIREBASE_STORAGE = getStorage();
    FIREBASE_STORAGEREF = ref(FIREBASE_STORAGE);
  } else {
    FIREBASE_APP = getApps()[0];
    FIREBASE_AUTH = getAuth(FIREBASE_APP);
    FIREBASE_DB = getFirestore(FIREBASE_APP);
    FIREBASE_STORAGE = getStorage();
    FIREBASE_STORAGEREF = ref(FIREBASE_STORAGE);
  }
} else {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  FIREBASE_APP_MOBILE = firebase.app();
}

export { FIREBASE_APP_MOBILE, FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE, FIREBASE_STORAGEREF };