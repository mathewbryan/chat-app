import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database"

const config = {
    apiKey: "AIzaSyA60htlAtP6hDXjnlhppCeHzFO-BPwbF7o",
    authDomain: "sprechen-9cc75.firebaseapp.com",
    databaseURL: "https://sprechen-9cc75.firebaseio.com"
  };

  
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();

    