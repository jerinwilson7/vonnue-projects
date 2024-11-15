import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv1re2htH7vGdswo5wnIOZq3QbPwyaQVQ",
  authDomain: "modern-js-cad2a.firebaseapp.com",
  projectId: "modern-js-cad2a",
  storageBucket: "modern-js-cad2a.appspot.com",
  messagingSenderId: "200613373661",
  appId: "1:200613373661:web:91457bb4edc5a51e9c9d34",
  measurementId: "G-E81FG7W4FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
