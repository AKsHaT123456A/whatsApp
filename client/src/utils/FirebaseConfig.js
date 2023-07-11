import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDo1AzHA0i45IFHPnqP-5cZtZIbwYrMPtw",
    authDomain: "whatsapp-clone-14293.firebaseapp.com",
    projectId: "whatsapp-clone-14293",
    storageBucket: "whatsapp-clone-14293.appspot.com",
    messagingSenderId: "822983619671",
    appId: "1:822983619671:web:154b26b73d328ab9bf5f12",
    measurementId: "G-3BZGNT1WT0"
  };
  const app=initializeApp(firebaseConfig);
  export const firebaseAuth=getAuth(app);