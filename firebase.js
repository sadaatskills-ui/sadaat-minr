import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1qGnWpSCRz399__gjLETCvfA_hM7CAwo",
    authDomain: "sadaat-mining.firebaseapp.com",
    databaseURL: "https://sadaat-mining-default-rtdb.firebaseio.com",
    projectId: "sadaat-mining",
    storageBucket: "sadaat-mining.firebasestorage.app",
    messagingSenderId: "878223683382",
    appId: "1:878223683382:web:f855000d6e49f94bc7cd97",
    measurementId: "G-077T90C0FP"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const realtimeDB = getDatabase(app);
const auth = getAuth(app);

export {
    app,
    db,
    realtimeDB,
    auth,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    signInAnonymously
}; 
