// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getFirestore,getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAv1re2htH7vGdswo5wnIOZq3QbPwyaQVQ",
//   authDomain: "modern-js-cad2a.firebaseapp.com",
//   projectId: "modern-js-cad2a",
//   storageBucket: "modern-js-cad2a.appspot.com",
//   messagingSenderId: "200613373661",
//   appId: "1:200613373661:web:91457bb4edc5a51e9c9d34",
//   measurementId: "G-E81FG7W4FE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();


// // collection ref


// const collref = collection(db,'recipe')


// // get collection data


// getDocs(collRef)



//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAv1re2htH7vGdswo5wnIOZq3QbPwyaQVQ",
//     authDomain: "modern-js-cad2a.firebaseapp.com",
//     projectId: "modern-js-cad2a",
//     storageBucket: "modern-js-cad2a.appspot.com",
//     messagingSenderId: "200613373661",
//     appId: "1:200613373661:web:91457bb4edc5a51e9c9d34",
//     measurementId: "G-E81FG7W4FE"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


//   console.log(analytics);



  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "firebase/app";
//   import { getFirestore,getDocs } from "firebase/firestore";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAv1re2htH7vGdswo5wnIOZq3QbPwyaQVQ",
//     authDomain: "modern-js-cad2a.firebaseapp.com",
//     projectId: "modern-js-cad2a",
//     storageBucket: "modern-js-cad2a.appspot.com",
//     messagingSenderId: "200613373661",
//     appId: "1:200613373661:web:91457bb4edc5a51e9c9d34",
//     measurementId: "G-E81FG7W4FE"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);
//  const db = getFirestore(app)


//  const colref = collection(db,'recipe');

//  getDocs(colref)
//  .then((snapshot)=>{
//     console.log(snapshot.docs);
    
//  })





  import { db } from "./firebase-config"
  import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const fetchRecipe = async()=>{
    try {
        const data = await getDocs(collection(db,'recipes'));
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
  }