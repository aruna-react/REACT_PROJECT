// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWbp2rd95rjVdT5M767WSNgz1A3BGHRJs",
  authDomain: "food-app-d8fb6.firebaseapp.com",
  projectId: "food-app-d8fb6",
  storageBucket: "food-app-d8fb6.appspot.com",
  messagingSenderId: "323455968926",
  appId: "1:323455968926:web:93ea53fee767fa9f453d8f",
  measurementId: "G-2DZ0NECKFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
