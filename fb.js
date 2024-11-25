//this is a sample for how to do this...will add to parts making req (redux thunk)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpq26mmCJlGKBsVtThoDQL6uQZr__O6HI",
    authDomain: "all-curls.firebaseapp.com",
    projectId: "all-curls",
    storageBucket: "all-curls.firebasestorage.app",
    messagingSenderId: "313493779472",
    appId: "1:313493779472:web:13eccef0bfd40fa71b0695",
    measurementId: "G-1H610F7F6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);