import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAEGnesxL0N6do3tK3_-hE3BIaNM6l5JW4",
  authDomain: "chase-to-cheese-68c85.firebaseapp.com",
  projectId: "chase-to-cheese-68c85",
  storageBucket: "chase-to-cheese-68c85.appspot.com",
  messagingSenderId: "510657445314",
  appId: "1:510657445314:web:0d41440704ead14b256a5b",
  measurementId: "G-L876C58GXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// export const firebaseConfig = {
//   apiKey: "AIzaSyAEGnesxL0N6do3tK3_-hE3BIaNM6l5JW4",
//   authDomain: "chase-to-cheese-68c85.firebaseapp.com",
//   projectId: "chase-to-cheese-68c85",
//   storageBucket: "chase-to-cheese-68c85.appspot.com",
//   messagingSenderId: "510657445314",
//   appId: "1:510657445314:web:0d41440704ead14b256a5b",
//   measurementId: "G-L876C58GXB"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEGnesxL0N6do3tK3_-hE3BIaNM6l5JW4",
//   authDomain: "chase-to-cheese-68c85.firebaseapp.com",
//   projectId: "chase-to-cheese-68c85",
//   storageBucket: "chase-to-cheese-68c85.appspot.com",
//   messagingSenderId: "510657445314",
//   appId: "1:510657445314:web:0d41440704ead14b256a5b",
//   measurementId: "G-L876C58GXB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

