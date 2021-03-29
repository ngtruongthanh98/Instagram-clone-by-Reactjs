import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDX2Ku-n4V7otMJmxJCLAoADIYWpdS57NU",
    authDomain: "instagram-clone-reactjs-5ead8.firebaseapp.com",
    projectId: "instagram-clone-reactjs-5ead8",
    storageBucket: "instagram-clone-reactjs-5ead8.appspot.com",
    messagingSenderId: "426711181843",
    appId: "1:426711181843:web:360f701e88039429cf6de6",
    measurementId: "G-QRFXWYFEPS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

