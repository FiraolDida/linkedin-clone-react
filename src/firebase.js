import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6avCEODrQ4S7V2UmG6c7weRtgoJe6ZzY",
    authDomain: "linkedin-clone-c4870.firebaseapp.com",
    projectId: "linkedin-clone-c4870",
    storageBucket: "linkedin-clone-c4870.appspot.com",
    messagingSenderId: "657696371596",
    appId: "1:657696371596:web:be10096af2e529438f1ca9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };