import React, { useState, useContext } from "react";

import { FIREBASE_APP, FIREBASE_AUTH } from "./firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { View, Text, Button } from "react-native";

import { UserContext } from "./usercontextslave";

const auth = FIREBASE_AUTH;
const provider = new GoogleAuthProvider(FIREBASE_APP);
import { styles } from "./Home";

export default function Login({ loggedIn, setLoggedIn, route }) {

    const { user, setUser } = useContext(UserContext);
   
    const [loading, setLoading] = useState(false);

    const signin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const userr = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          console.log(userr);
          setUser(userr);
          console.log(user);
          setLoggedIn(true);
          
          console.log("logged in");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.error(error);
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
          onPress={signin}
          disabled={loading}
        />
      </View>

      <Text style={{ fontSize: 20, color: "#fff" }}>
        {loggedIn ? user.email : "Sign in"}
      </Text>
    </View>
  );
}
