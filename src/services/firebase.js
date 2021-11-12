// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8g4iJeJGQEuwF-jyDZ7SvHxlDGk4jYPQ",
  authDomain: "projeto-av2-web.firebaseapp.com",
  projectId: "projeto-av2-web",
  storageBucket: "projeto-av2-web.appspot.com",
  messagingSenderId: "120455472598",
  appId: "1:120455472598:web:74214f78fe079a73477077"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp