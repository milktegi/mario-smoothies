  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHEL_Ev3H5II-uXH6pR6kSfQj2OaZmyqE",
    authDomain: "mario-smoothies-607f9.firebaseapp.com",
    databaseURL: "https://mario-smoothies-607f9.firebaseio.com",
    projectId: "mario-smoothies-607f9",
    storageBucket: "mario-smoothies-607f9.appspot.com",
    messagingSenderId: "948518014927"
  };
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  // export firestore database 

export default firebaseApp.firestore()