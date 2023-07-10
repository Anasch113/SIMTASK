
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk88ZpU22jeIsVCqlrkAdy1QuY7K2BZAA",
  authDomain: "netflix-auth-5d743.firebaseapp.com",
  projectId: "netflix-auth-5d743",
  storageBucket: "netflix-auth-5d743.appspot.com",
  messagingSenderId: "447249978527",
  appId: "1:447249978527:web:6afa0b58ea9188a3fc3eaa",
  measurementId: "G-6JKFS33RCN"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth};