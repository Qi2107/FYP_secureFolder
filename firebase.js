// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEh_6kaIWQ_LOWDZLAfyrpmUIgIG_iZ9Q",
  authDomain: "fir-auth-b5fb7.firebaseapp.com",
  projectId: "fir-auth-b5fb7",
  storageBucket: "fir-auth-b5fb7.appspot.com",
  messagingSenderId: "426635736717",
  appId: "1:426635736717:web:7eba8b5eee2e0c692094c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Authentication
const auth = getAuth(app);
// Set up Firestore
const firestore = getFirestore(app);
//Set up Firebase Storage
const storage = getStorage(app);



export { auth, firestore, storage };
