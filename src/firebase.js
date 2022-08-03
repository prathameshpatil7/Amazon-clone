import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkEN7We0otSakXiY-jM9F010nSBI03478",
  authDomain: "clone-b881d.firebaseapp.com",
  projectId: "clone-b881d",
  storageBucket: "clone-b881d.appspot.com",
  messagingSenderId: "678841017510",
  appId: "1:678841017510:web:1bd552b3611793f18cc067",
  measurementId: "G-JX6TPVHH2E",
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
