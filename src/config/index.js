import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDr0eVnTSW9xrFgPqJs5yVpKk6c9uQNMrs",
  authDomain: "todo-redux-auth-app.firebaseapp.com",
  databaseURL: "https://todo-redux-auth-app.firebaseio.com",
  projectId: "todo-redux-auth-app",
  storageBucket: "todo-redux-auth-app.appspot.com",
  messagingSenderId: "1046827257211",
  appId: "1:1046827257211:web:8a3f687f572cd5a096c1de"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
