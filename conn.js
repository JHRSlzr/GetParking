var firebaseConfig = {
    apiKey: "AIzaSyArvJbOGzW97CmNwmhJuYZXcUwCSJU40nU",
    authDomain: "eats-11396.firebaseapp.com",
    databaseURL: "https://eats-11396-default-rtdb.firebaseio.com",
    projectId: "eats-11396",
    storageBucket: "eats-11396.appspot.com",
    messagingSenderId: "406752767746",
    appId: "1:406752767746:web:86cb8652c2aae017161c1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();