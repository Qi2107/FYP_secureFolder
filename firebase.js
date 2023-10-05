// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEh_6kaIWQ_LOWDZLAfyrpmUIgIG_iZ9Q",
    authDomain: "fir-auth-b5fb7.firebaseapp.com",
    projectId: "fir-auth-b5fb7",
    storageBucket: "fir-auth-b5fb7.appspot.com",
    messagingSenderId: "426635736717",
    appId: "1:426635736717:web:7eba8b5eee2e0c692094c4"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Authentication
const auth = getAuth(app);

export { auth };





