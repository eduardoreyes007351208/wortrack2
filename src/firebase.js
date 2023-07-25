// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6DRR0KisvayT0OwoS568OBuFOBRWR0N0",
  authDomain: "fir-auth-980fa.firebaseapp.com",
  projectId: "fir-auth-980fa",
  storageBucket: "fir-auth-980fa.appspot.com",
  messagingSenderId: "1060785767954",
  appId: "1:1060785767954:web:8c8835b02de65af8ce7acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app