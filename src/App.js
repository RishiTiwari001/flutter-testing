import React from 'react';
import { useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHABUOyGHFASF_knzuhrqDbG-N_biDJXw",
  authDomain: "react-project-ee8ef.firebaseapp.com",
  projectId: "react-project-ee8ef",
  storageBucket: "react-project-ee8ef.appspot.com",
  messagingSenderId: "478956658957",
  appId: "1:478956658957:web:a9ecc73bb783548d7dd044",
  measurementId: "G-QS9MK29FJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function IndexPage() {
  const Barcode = "1234"
  console.log('heyyaaa');
  useEffect(() => {
    console.log('heyyaaa');
    if (window.Barcode && window.Barcode.postMessage) {
      Barcode.postMessage("hello bro hi");
   }
  });
  return <div>Hello World.</div>;
}