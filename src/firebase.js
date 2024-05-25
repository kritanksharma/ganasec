import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjnb2ZpnX7dBxnMIiRi0m-hoUEv1jIEpM",
  authDomain: "ganasec-8c3bd.firebaseapp.com",
  projectId: "ganasec-8c3bd",
  storageBucket: "ganasec-8c3bd.appspot.com",
  messagingSenderId: "294486258232",
  appId: "1:294486258232:web:3328bba98d007e8fbdaccd",
  measurementId: "G-WWC5JWC745"
};
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { app, db };