import React, { useState } from "react";
import firebase from "firebase";
import "./App.css";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import { Container } from "@material-ui/core";
//import authUI from "./database.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(function (user) {
    setLoggedIn(user !== null);
  });

  return (
    <Container maxWidth="md">
      <header className="App-header">
        <h1>Blog!</h1>
        <LoginForm loggedIn={loggedIn} />
      </header>
      {loggedIn && <BlogForm />}
      <Blog />
    </Container>
  );
}

export default App;
