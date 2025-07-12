import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_OiNjYwebvCvTu_8YoxZ6thH60tk3vOs",
  authDomain: "project1-75b4b.firebaseapp.com",
  projectId: "project1-75b4b",
  storageBucket: "project1-75b4b.firebasestorage.app",
  messagingSenderId: "793517587974",
  appId: "1:793517587974:web:63d1f924eba754bb058d87",
  measurementId: "G-QBE7CSNK5D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
