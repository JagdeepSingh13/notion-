// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBbvhjB22FFSygK1QhPt9yti3fSHNzOyI",
  authDomain: "notion-32a95.firebaseapp.com",
  projectId: "notion-32a95",
  storageBucket: "notion-32a95.firebasestorage.app",
  messagingSenderId: "910349966240",
  appId: "1:910349966240:web:59625191aaca49dd7da2c5",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
export { db };
