// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoyOL3HwtKu_Xn-qq2UD4Q3Ip1zK7Z2IU",
  authDomain: "netflixgpt-3e776.firebaseapp.com",
  projectId: "netflixgpt-3e776",
  storageBucket: "netflixgpt-3e776.firebasestorage.app",
  messagingSenderId: "514817369743",
  appId: "1:514817369743:web:73de3e20cb450a02db32fa",
  measurementId: "G-PRN43CFDF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };