import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx"
};

firebase.initializeApp(config);

export default firebase;
