import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC79wvcXieNiApZU80E9q1jv2AxhP5nLpA",
  authDomain: "blog579673.firebaseapp.com",
  databaseURL: "https://blog579673.firebaseio.com",
  projectId: "blog579673",
  storageBucket: "blog579673.appspot.com",
  messagingSenderId: "567418444572",
  appId: "1:567418444572:web:f65e663e963b91c88e38d9",
  measurementId: "G-QH26CB0QXF",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
