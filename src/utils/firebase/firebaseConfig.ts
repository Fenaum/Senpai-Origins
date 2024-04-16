// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0G50PWqM1-sCqxCNao5_PzGSSh3vSQrk",
  authDomain: "senpai-origins.firebaseapp.com",
  projectId: "senpai-origins",
  storageBucket: "senpai-origins.appspot.com",
  messagingSenderId: "815856138625",
  appId: "1:815856138625:web:22be38b799399050861080",
  measurementId: "G-53650ZE340",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };