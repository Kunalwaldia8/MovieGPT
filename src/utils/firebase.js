// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2KaT0vthoN26YKGuwfNT6icWIyLky6xw",
  authDomain: "netflix-gpt-2496e.firebaseapp.com",
  projectId: "netflix-gpt-2496e",
  storageBucket: "netflix-gpt-2496e.firebasestorage.app",
  messagingSenderId: "927821295497",
  appId: "1:927821295497:web:179c9777544d5611047b58",
  measurementId: "G-EW3NBQ0B10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
