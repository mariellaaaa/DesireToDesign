// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "*",
  authDomain: "desiretodesign-3834a.firebaseapp.com",
  projectId: "desiretodesign-3834a",
  storageBucket: "desiretodesign-3834a.appspot.com",
  messagingSenderId: "613967206921",
  appId: "1:613967206921:web:dd943f6e5e1e9ab9e1f6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

