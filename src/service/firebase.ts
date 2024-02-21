import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALiIS6z3QOzGfKdz_lPuoPP46CLFNVWYc",
  authDomain: "react-notes-df87e.firebaseapp.com",
  projectId: "react-notes-df87e",
  storageBucket: "react-notes-df87e.appspot.com",
  messagingSenderId: "1046927559235",
  appId: "1:1046927559235:web:5c4acb0ef686ebaa4862f6"
};


const appFirebase = initializeApp(firebaseConfig)

export const appFirebaseDb = getDatabase(appFirebase)