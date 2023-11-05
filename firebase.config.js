// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHAFwG6gWfW1yiQpHa47H57HScvCb9hxE",
  authDomain: "tech-corner-blog.firebaseapp.com",
  projectId: "tech-corner-blog",
  storageBucket: "tech-corner-blog.appspot.com",
  messagingSenderId: "990922502149",
  appId: "1:990922502149:web:4fd0275475b63eafc56c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;