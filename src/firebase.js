import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBf6S511AwXmYFxT4xOVE70NfaQq6PCJFg",
    authDomain: "linkeldin-clone-practise.firebaseapp.com",
    projectId: "linkeldin-clone-practise",
    storageBucket: "linkeldin-clone-practise.appspot.com",
    messagingSenderId: "787535947462",
    appId: "1:787535947462:web:c3f9730c791c9e8c72d9c7",
    measurementId: "G-FM62GLXZ9N"
});

const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }

