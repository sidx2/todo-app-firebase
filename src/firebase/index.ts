// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuvet0iwQDxpZ7vo-ZiIt88vnKBSOrkGM",
  authDomain: "fir-todo-7ab3c.firebaseapp.com",
  projectId: "fir-todo-7ab3c",
  storageBucket: "fir-todo-7ab3c.appspot.com",
  messagingSenderId: "101337870450",
  appId: "1:101337870450:web:0114241cb317afa4d1d2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db }