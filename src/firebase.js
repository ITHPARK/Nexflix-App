// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZS0gFOSc7NUfoy_vyfS3SHitr1Vs6SlQ",
  authDomain: "react-netflix-app-994a3.firebaseapp.com",
  projectId: "react-netflix-app-994a3",
  storageBucket: "react-netflix-app-994a3.appspot.com",
  messagingSenderId: "972101041133",
  appId: "1:972101041133:web:ecadadde758192b9cec5e4",
  measurementId: "G-WC6SBNGMJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);