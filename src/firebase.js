import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCpRjUJzGzp5oDpnk2C0EIE9XFNw-jnMOs",
  authDomain: "todo-react-app-c5eca.firebaseapp.com",
  databaseURL: "https://todo-react-app-c5eca.firebaseio.com",
  projectId: "todo-react-app-c5eca",
  storageBucket: "todo-react-app-c5eca.appspot.com",
  messagingSenderId: "443629654232",
  appId: "1:443629654232:web:1e6ef5fec43a9d3f79c7ad"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
