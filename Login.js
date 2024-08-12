import React, { useState, useContext, useEffect, useRef } from "react";
import {
  FIREBASE_APP,
  FIREBASE_APP_MOBILE,
  FIREBASE_AUTH,
  firebaseConfig,
} from "./firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  updateCurrentUser,
  getReactNativePersistence
} from "firebase/auth";
import { View, Text, Button, Platform, SafeAreaView } from "react-native";
import { UserContext } from "./usercontextslave";
import auth, { firebase } from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { styles } from "./Home";

const platform = Platform.OS;
GoogleSignin.configure({
  webClientId: "482050813272-cn34emvm3ve05eariv3fe73f6s3c7n8n.apps.googleusercontent.com",
});

export default function Login({ loggedIn, setLoggedIn }) {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const signin = async () => {
    setLoading(true);

    try {
      if (platform === "web") {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(FIREBASE_AUTH, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        setLoggedIn(true);
        console.log("Logged in:", user);
      } else {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        const token = credential.token;
        setUser(userInfo);
        setLoggedIn(true);
        console.log("Logged in:", userInfo);
        return await auth(FIREBASE_APP_MOBILE).signInWithCredential(credential);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signout = () => {
    if (platform === "web") {
      FIREBASE_AUTH.signOut()
        .then(() => setLoggedIn(false))
        .then(() => console.log("Signed out"));
    } else {
      auth(FIREBASE_APP_MOBILE)
        .signOut()
        .then(() => setLoggedIn(false))
        .then(() => console.log("Signed out"));
    }
  };

  return (
    <SafeAreaView style={styles.MainPage}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.header}>{loggedIn ? "Sign out" : "Log in"}</Text>
        <Button
          style={{
            color: "#fff",
            flex: 1,
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 20,
          }}
          title={loggedIn ? "Sign out" : "Log in with google"}
          onPress={() => {
            if (!loggedIn) {
              signin().then(() => console.log("Signed in with google"));
            } else {
              signout();
            }
          }}
          disabled={loading}
        />
        <Text style={{ fontSize: 20, color: "#fff", flex: 5, padding: 10, textAlign: "center" }}>
          {loggedIn
            ? platform === "web"
              ? user.email
              : user.user.email
            : "Please sign in to access features such as the Forum and Consultation"}
        </Text>
        <View style={{ flex: 10 }} />
      </View>
    </SafeAreaView>
  );
}