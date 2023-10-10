// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkvkpTfXW1J0GReonYp7JVTJJeEJqFO8",
  authDomain: "cuaderno-de-comunicacion-a7b8f.firebaseapp.com",
  projectId: "cuaderno-de-comunicacion-a7b8f",
  storageBucket: "cuaderno-de-comunicacion-a7b8f.appspot.com",
  messagingSenderId: "401647753693",
  appId: "1:401647753693:web:a61ded8cf0ef00bf9dfe34",
  measurementId: "G-KGRT204X2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);