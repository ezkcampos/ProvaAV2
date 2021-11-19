
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8g4iJeJGQEuwF-jyDZ7SvHxlDGk4jYPQ",
  authDomain: "projeto-av2-web.firebaseapp.com",
  projectId: "projeto-av2-web",
  storageBucket: "projeto-av2-web.appspot.com",
  messagingSenderId: "120455472598",
  appId: "1:120455472598:web:74214f78fe079a73477077"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp