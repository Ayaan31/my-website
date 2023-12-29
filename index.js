// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcyNDFRLeIIZXsanKZiErkU-7TAtzrRuY",
  authDomain: "my-website-2a4a8.firebaseapp.com",
  projectId: "my-website-2a4a8",
  storageBucket: "my-website-2a4a8.appspot.com",
  messagingSenderId: "642818383049",
  appId: "1:642818383049:web:1b8fe40821c696351b8118",
  measurementId: "G-VT8VSWN802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

