import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcd5866B-Lw0_YzyC5dVhdXkhMwD0HYVU",
  authDomain: "heroeapp-b1282.firebaseapp.com",
  projectId: "heroeapp-b1282",
  storageBucket: "heroeapp-b1282.appspot.com",
  messagingSenderId: "362497151034",
  appId: "1:362497151034:web:194e3b64d97f0a4ef16503",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    firebase,
  googleAuthProvider,
    facebookAuthProvider
}