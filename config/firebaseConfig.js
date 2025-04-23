// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDEuBnsnmWGL_UuP1NrPUOL96EDA8Y8PY",
  authDomain: "fine-dine-rn.firebaseapp.com",
  projectId: "fine-dine-rn",
  storageBucket: "fine-dine-rn.firebasestorage.app",
  messagingSenderId: "799122465443",
  appId: "1:799122465443:web:41b048305d027826e65516",
  measurementId: "G-DZEF116TNB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);