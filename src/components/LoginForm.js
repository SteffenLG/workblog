import React from "react";
import firebase from "firebase";
import { useInput } from "../hooks/input-hook";
import { Button, TextField, Grid } from "@material-ui/core";

function LoginForm(props) {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    resetEmail();
    resetPassword();
  };

  const handleSignout = async (evt) => {
    evt.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed out"));
  };

  return (
    <div className="loginForm" >
      <form onSubmit={handleSubmit}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <TextField label="email" {...bindEmail} />
          </Grid>
          <Grid item>
            <TextField label="password" type="password" {...bindPassword} />
          </Grid>
          <Grid item>
            <Button color="primary" type="submit">
              Log in
            </Button>
          </Grid>
          {props.loggedIn && (
            <Grid item>
              <Button color="primary" onClick={handleSignout}>
                Log out
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;
