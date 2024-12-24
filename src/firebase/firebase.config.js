// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHABOxe5caoyJ2wlq4am6bYAhRR8S7oFA",
  authDomain: "library-management-system-198.firebaseapp.com",
  projectId: "library-management-system-198",
  storageBucket: "library-management-system-198.firebasestorage.app",
  messagingSenderId: "756857510239",
  appId: "1:756857510239:web:23bef4a86c7fbcee59feea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth