// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLzAMtOP-XwfoQVQdEhLyQ_TsIrePFQys",
  authDomain: "wine-ecommerce-coderhouse.firebaseapp.com",
  projectId: "wine-ecommerce-coderhouse",
  storageBucket: "wine-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "540486049235",
  appId: "1:540486049235:web:8dc76ccd128ce8725aa326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);