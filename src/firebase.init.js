// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgMnjtBR_XDRs4sUvGSq78BviwHvinvHo",
    authDomain: "red-onion-12bb1.firebaseapp.com",
    projectId: "red-onion-12bb1",
    storageBucket: "red-onion-12bb1.appspot.com",
    messagingSenderId: "878516843718",
    appId: "1:878516843718:web:760c8870962a11f53313c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;