import React, { useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";

import { useStyles } from './classes/loginStyles.js';

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Alert } from '@material-ui/lab';


const AdminLogin = () => {
  
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //Request
  let apiURL = "http://localhost:5000/login/admin";
  let payload = {
    email: email,
    password: password,
  };

  const loginhandler = (event) => {
    event.preventDefault();
      Axios.post(apiURL, payload)
        .then((response) => {
          localStorage.setItem("tokenAdmin", response.data.token);
          history.push("/admin");
        })
        .catch((error) => {
          setErrorMessage(error.response.data.msg);
        });
  };

  //Component
  return (
    <Paper elevation={4} className={classes.container}>
      <List className={classes.inlineList}>
        <ListItemIcon>
          <SupervisorAccountIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h6" color="secondary" className={classes.title}>
            Login administrateur
          </Typography>
        </ListItemText>
      </List>
      {errorMessage && (
        <Alert severity="error">
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={loginhandler}>
        <TextField
          variant="outlined"
          placeholder="Adresse email"
          fullWidth
          type="email"
          required
          value={email}
          className={classes.input}
          onChange={(event) => handleEmail(event)}
        />
        <TextField
          variant="outlined"
          placeholder="Mot de passe"
          fullWidth
          required
          type="password"
          value={password}
          className={classes.input}
          onChange={(event) => handlePassword(event)}
        />
        <Button className={classes.button} type="submit">
          <Typography variant="body1" color="secondary">
            Login
          </Typography>
        </Button>
      </form>
    </Paper>
  );
};

export default AdminLogin;
