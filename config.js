import * as firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyBH_evkjRUicmVMSi218nF9kPp8xdo_CNk",
  authDomain: "wily-app-16556.firebaseapp.com",
  projectId: "wily-app-16556",
  storageBucket: "wily-app-16556.appspot.com",
  messagingSenderId: "808777106023",
  appId: "1:808777106023:web:4188ee4fb61148fb048ac2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()