import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDNmtV9FmDIkSdO8eKBdeUlaANYRvd_8A",
    authDomain: "live-chat-60621.firebaseapp.com",
    projectId: "live-chat-60621",
    storageBucket: "live-chat-60621.appspot.com",
    messagingSenderId: "387758192637",
    appId: "1:387758192637:web:c5583633b1ce45acf20b94",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };