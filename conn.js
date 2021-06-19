var firebaseConfig = {
  apiKey: "AIzaSyD82iSnsFOIMpSsdFnAOxkp4oPhk5VZNgQ",
  authDomain: "cards-c3e11.firebaseapp.com",
  databaseURL: "https://cards-c3e11-default-rtdb.firebaseio.com",
  projectId: "cards-c3e11",
  storageBucket: "cards-c3e11.appspot.com",
  messagingSenderId: "837302697098",
  appId: "1:837302697098:web:7081dce1586fe72b3ac173"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = firebase.firestore();