// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPw9AAI_Z3X4fAQKubaSKbD-6eetSCgWQ",
  authDomain: "expense-tracker-c6dcc.firebaseapp.com",
  projectId: "expense-tracker-c6dcc",
  storageBucket: "expense-tracker-c6dcc.appspot.com",
  messagingSenderId: "426945519842",
  appId: "1:426945519842:web:6271f08ec86cd38894bebb",
  measurementId: "G-E3FV68LD0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);



// firebase login
// firebase init
// firebase deploy