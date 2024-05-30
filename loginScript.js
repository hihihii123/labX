import { FIREBASE_APP, FIREBASE_AUTH } from "./firebaseConfig";
import { signInWithPopup, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
const auth = FIREBASE_AUTH;
const provider = new GoogleAuthProvider(FIREBASE_APP);

export function signin(setLoading, setLoggedIn, setUser) {

    try {
        
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const userr = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          

          setUser(userr);
          setLoggedIn(true);
          if (!userr.emailVerified) {
            sendEmailVerification(userr);
          }
        }).catch((error) => {
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
        alert('Sign in failed: ' + error.message);

    } finally {
  
    }
}