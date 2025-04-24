// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfaNmtgyo1VgqVFIHJ8vq-dekSJyjjk9c",
  authDomain: "login-app-a4816.firebaseapp.com",
  projectId: "login-app-a4816",
  storageBucket: "login-app-a4816.appspot.com",
  messagingSenderId: "653367042131",
  appId: "1:653367042131:web:95be958a59dde1477c26a6",
  measurementId: "G-J0SB1FB8LS",
};

// Inicializa uma vez só
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { db, auth, analytics };
