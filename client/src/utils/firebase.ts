// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArSIevYvOuInG6DrxJl-Yd8tqpgJM6d2c",
  authDomain: "lec8-f83e4.firebaseapp.com",
  projectId: "lec8-f83e4",
  storageBucket: "lec8-f83e4.firebasestorage.app",
  messagingSenderId: "568983682145",
  appId: "1:568983682145:web:dcae5cf4667e1327083e20",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
