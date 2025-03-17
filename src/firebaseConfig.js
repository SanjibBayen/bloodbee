// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJbX-fm2Pi4IeqQCePncsdyEACb9KpYlQ",
  authDomain: "life-flow123.firebaseapp.com",
  projectId: "life-flow123",
  storageBucket: "life-flow123.firebasestorage.app",
  messagingSenderId: "1027470542532",
  appId: "1:1027470542532:web:4fe5350e4c1cf004b0ab91",
  measurementId: "G-EBJFRKVQNE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };