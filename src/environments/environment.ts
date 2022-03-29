// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'app-9143d',
    appId: '1:239921797101:web:24b937e5a5549f14a979e4',
    databaseURL: 'https://app-9143d-default-rtdb.firebaseio.com',
    storageBucket: 'app-9143d.appspot.com',
    apiKey: 'AIzaSyCmL2Cc2hhEEuD5uotIeVjfZOB-_1pluzg',
    authDomain: 'app-9143d.firebaseapp.com',
    messagingSenderId: '239921797101',
    measurementId: 'G-EMJC7XE0BL',
  }
};
 
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyCmL2Cc2hhEEuD5uotIeVjfZOB-_1pluzg",
  authDomain: "app-9143d.firebaseapp.com",
  databaseURL: "https://app-9143d-default-rtdb.firebaseio.com",
  projectId: "app-9143d",
  storageBucket: "app-9143d.appspot.com",
  messagingSenderId: "239921797101",
  appId: "1:239921797101:web:439b2caed0f67c54a979e4",
  measurementId: "G-G1H4981128"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);