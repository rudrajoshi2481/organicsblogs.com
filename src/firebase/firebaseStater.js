import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDjweTaVQ4cza-b3Fb07p8JRfdzByYUrg0",
    authDomain: "organics-blogs-89c21.firebaseapp.com",
    databaseURL: "https://organics-blogs-89c21.firebaseio.com",
    projectId: "organics-blogs-89c21",
    storageBucket: "organics-blogs-89c21.appspot.com",
    messagingSenderId: "846093507610",
    appId: "1:846093507610:web:e5bcc79d1c3793aad805a3",
    measurementId: "G-LGJKVMVP3M"
  };
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);


// const analytics =   firebase.analytics();
export const firebaseAuth = firebase.auth()
// const firebaseAuth = app().auth()
export const firestore = firebase.firestore()
// const firestore = app().firestore()

// export {firebaseAuth,firestore}