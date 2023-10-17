import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVGkcpts83a9Zn2RoUlEDtHqqikVjqYVc",
  authDomain: "openinapp-d14b2.firebaseapp.com",
  projectId: "openinapp-d14b2",
  storageBucket: "openinapp-d14b2.appspot.com",
  messagingSenderId: "584319757582",
  appId: "1:584319757582:web:46efbeb6f531f3f9f17b5f",
  measurementId: "G-P772F4FZN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const appleProvider = new AppleAuthProvider();

export {auth, googleProvider}