import React, { useState, useContext, useEffect, useRef } from "react";

import { FIREBASE_APP, FIREBASE_AUTH, firebaseConfig } from "./firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  updateCurrentUser,
} from "firebase/auth";
import { View, Text, Button, Platform } from "react-native";

import { UserContext } from "./usercontextslave";
import auth, { firebase } from '@react-native-firebase/auth';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { styles } from "./Home";

const platform = Platform.OS;
GoogleSignin.configure({webClientId: '482050813272-cn34emvm3ve05eariv3fe73f6s3c7n8n.apps.googleusercontent.com'});

export default function Login({ loggedIn, setLoggedIn }) {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);


const signin = async () => {
  setLoading(true);

  try {
    if (platform === "web") {
      // Web Sign-In
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(FIREBASE_AUTH, provider); // Use FIREBASE_AUTH

      // Extract user data and token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Update state
      setUser(user);
      setLoggedIn(true);
      console.log("Logged in:", user);
    } else {
     
      // Mobile Sign-In (Android/iOS)
      GoogleSignin.configure({
        webClientId: '482050813272-cn34emvm3ve05eariv3fe73f6s3c7n8n.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const credential = auth.GoogleAuthProvider.credential(userInfo.idToken); // Use idToken
      const token = credential.token;
      setUser(userInfo);
      setLoggedIn(true);
      console.log("Logged in:", userInfo);
      // Sign-in the user with the credential
      return await auth().signInWithCredential(credential);

      // Update state
  
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    alert("Sign in failed: " + error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.MainPage}>
      <View>
        <Text style={styles.header}>Log in</Text>
        <Button
          style={styles.Text}
          title="Log in with Google"
          onPress={() => signin() .then(() => console.log('Signed in with google'))}
          disabled={loading}
        />
      </View>

      <Text style={{ fontSize: 20, color: "#fff" }}>
        {loggedIn ? platform === "web" ? user.email : user.user.email : "Sign in"}
      </Text>
    </View>
  );
}
