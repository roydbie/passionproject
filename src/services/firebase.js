import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB7cFXMiENxgEIP8cb5bFgjooO7dFdR0pc",
    authDomain: "passionproject-b8f84.firebaseapp.com",
    projectId: "passionproject-b8f84",
    storageBucket: "passionproject-b8f84.appspot.com",
    messagingSenderId: "851049988883",
    appId: "1:851049988883:web:550b219e78d070ac17d0e6",
    measurementId: "G-CPKVX3ZWTN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;