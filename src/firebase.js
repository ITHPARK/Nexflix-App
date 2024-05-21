// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQF8W6OmFkrEQUsA-pD1_AA9zUDlgWwM",
  authDomain: "react-netflix-3b61e.firebaseapp.com",
  projectId: "react-netflix-3b61e",
  storageBucket: "react-netflix-3b61e.appspot.com",
  messagingSenderId: "214650512963",
  appId: "1:214650512963:web:4026a64a17a991cd7356f6",
  measurementId: "G-7BS2YHP1QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);