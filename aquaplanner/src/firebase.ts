import { initializeApp } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZWEuA3ANhq8aCPeFjyvGdQrhMSHCgdWI",
  authDomain: "aquaplan-bea3a.firebaseapp.com",
  databaseURL: "https://aquaplan-bea3a.firebaseio.com",
  projectId: "aquaplan-bea3a",
  storageBucket: "aquaplan-bea3a.appspot.com",
  messagingSenderId: "851019094245",
  appId: "1:851019094245:web:d7206091f19b0a8b939c0c",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log("firebase intitializing");
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// const usersCollection = db.collection('users');

export { db, auth };
