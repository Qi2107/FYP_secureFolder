// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtUSjjWn-hAcu1F4Wed8DhmF6eEZsf2yw",
  authDomain: "fyp23s309.firebaseapp.com",
  projectId: "fyp23s309",
  storageBucket: "fyp23s309.appspot.com",
  messagingSenderId: "1087102665295",
  appId: "1:1087102665295:web:6f0b8ae9f3b9b01539e03a",
  measurementId: "G-1S3DSDGM7T"

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Authentication
const auth = getAuth(app);

// Set up Firebase Storage
const storage = getStorage(app);

export { auth, storage };