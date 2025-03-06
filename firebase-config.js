// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPWFQASpLqkVzl-uPn0Ju8yv4dSXqBWt4",
  authDomain: "website-group-eb581.firebaseapp.com",
  projectId: "website-group-eb581",
  storageBucket: "website-group-eb581.firebasestorage.app",
  messagingSenderId: "872476277610",
  appId: "1:872476277610:web:73e806c526290169fb8313",
  measurementId: "G-QK44FMLTQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);