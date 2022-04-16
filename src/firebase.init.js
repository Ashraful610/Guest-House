// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrfNKNngpXTnlbvxoOYa4sZtA90oUF844",
  authDomain: "guest-house-ca632.firebaseapp.com",
  projectId: "guest-house-ca632",
  storageBucket: "guest-house-ca632.appspot.com",
  messagingSenderId: "839484154349",
  appId: "1:839484154349:web:279c7bf81301b5c39f07e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth