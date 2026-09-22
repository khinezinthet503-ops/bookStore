import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCprx-b7e4ugQXrHR05uIjXS2abzMCRPIE",
  authDomain: "bookstore-7d256.firebaseapp.com",
  projectId: "bookstore-7d256",
  storageBucket: "bookstore-7d256.firebasestorage.app",
  messagingSenderId: "193925465350",
  appId: "1:193925465350:web:e5be103ffea99736000a87",
  measurementId: "G-WJPR3KN4X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
