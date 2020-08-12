import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import firebaseui from "firebaseui";

function App() {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#firebaseui-auth-container", {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Blog!</p>
      </header>

      <Blog />

      <BlogForm />
    </div>
  );
}

export default App;
