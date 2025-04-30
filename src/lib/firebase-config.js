// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7xHDCuYXvDYK6ES7E28uZ3qwRJLT5PLA",
    authDomain: "cadm-e9e77.firebaseapp.com",
    projectId: "cadm-e9e77",
    storageBucket: "cadm-e9e77.firebasestorage.app",
    messagingSenderId: "962466193917",
    appId: "1:962466193917:web:dcf70b3894f89952887994"
};
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);