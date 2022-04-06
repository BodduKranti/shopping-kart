import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqzexhGaa1gY3u-Rs73Ts7ekowVpoMyMw",
  authDomain: "shopping-kart-3ba57.firebaseapp.com",
  projectId: "shopping-kart-3ba57",
  storageBucket: "shopping-kart-3ba57.appspot.com",
  messagingSenderId: "233590558955",
  appId: "1:233590558955:web:1eee03ab0782f5b0596eae"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);