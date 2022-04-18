// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhixqykTUuIFFNIT5gtGjP6_M7ev-ly08",
  authDomain: "assignment-10-12190.firebaseapp.com",
  projectId: "assignment-10-12190",
  storageBucket: "assignment-10-12190.appspot.com",
  messagingSenderId: "647668914154",
  appId: "1:647668914154:web:d7173215559dc1e01f4493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;