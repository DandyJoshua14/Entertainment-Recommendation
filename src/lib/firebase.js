// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDdpOXm_p3YuwLNRDQZy125NTG9MvlSHcs",

  authDomain: "entertainment-recommenda-e2bf2.firebaseapp.com",

  projectId: "entertainment-recommenda-e2bf2",

  storageBucket: "entertainment-recommenda-e2bf2.appspot.com",

  messagingSenderId: "342401252222",

  appId: "1:342401252222:web:0cc1db6ad65f261e03912f",

  measurementId: "G-J5HF9LELZJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);