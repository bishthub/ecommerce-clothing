import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA165ovS1uHhfTSOoWLotzl9xcVjkal08Y",
    authDomain: "crwn-db-ba07c.firebaseapp.com",
    databaseURL: "https://crwn-db-ba07c.firebaseio.com",
    projectId: "crwn-db-ba07c",
    storageBucket: "crwn-db-ba07c.appspot.com",
    messagingSenderId: "909273115219",
    appId: "1:909273115219:web:72416f1fc0aa3c666774a6",
    measurementId: "G-WETSHV98FE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;