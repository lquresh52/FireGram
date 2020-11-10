import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfAFWdDFiupu5YNfGUwPrOmd3XQB43FhQ",
    authDomain: "quresh-firegram.firebaseapp.com",
    databaseURL: "https://quresh-firegram.firebaseio.com",
    projectId: "quresh-firegram",
    storageBucket: "quresh-firegram.appspot.com",
    messagingSenderId: "786317913232",
    appId: "1:786317913232:web:51717499bf6183f8dafc15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };