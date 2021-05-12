import React, { useEffect, useState } from "react";
import Axios from "axios";

import { useStyles } from "./Styles";
import ReducedHeader from "../Header/ReducedHeader";
import ReducedFooter from "../HomePage/Footer/ReducedFooter";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router';

const EditUserInfo = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [errMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const getUser = () => {
      let apiURL = `http://localhost:5000/users/${match.params.id}`;
      Axios.get(apiURL)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    };

    getUser();
  }, [match.params.id]);

  const handlePassword = event => {
    setPassword(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleFamilyName = (event) => {
    setFamilyName(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleAddress2 = (event) => {
    setAddress2(event.target.value);
  };

  const handleAddress3 = (event) => {
    setAddress3(event.target.value);
  };

  const handlePaymentMode = (event) => {
    setPaymentMode(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let token = localStorage.getItem("token");
    let payload = {
      password: password,
      email: user.email,
      nom: familyName,
      prenom: name,
      adresse_de_livraison: address,
      adresse_de_livraison_2: address2,
      adresse_de_livraison_3: address3,
      information_de_facturation: paymentMode,
    };
    let apiURL = `http://localhost:5000/users/${user._id}`;

    await Axios.put(apiURL, payload, {
      headers: {
        token: token,
      },
    })
      .then((response) => {
        setSuccessMsg(response.data.msg);
        history.push("/compte");
      })
      .catch((error) => {
        setErrorMsg(error.response.data.msg);
      });
  };

  return (
    <Grid container justify="space-evenly">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ReducedHeader />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        {errMsg && <Alert severity="error">{errMsg}</Alert>}
        {successMsg && <Alert severity="success">{successMsg}</Alert>}
        <form onSubmit={submitHandler} className={classes.form}>
        <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Mot de passe :
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre mot de passe"
                fullWidth
                type="password"
                required
                value={password}
                onChange={(event) => handlePassword(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Nom : {user.nom || ""}
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre nom"
                fullWidth
                required
                value={familyName}
                onChange={(event) => handleFamilyName(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Prénom : {user.prenom || ""}
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre prénom"
                fullWidth
                required
                value={name}
                onChange={(event) => handleName(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Adresse de livraison : {user.adresse_de_livraison}
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre adresse"
                fullWidth
                required
                value={address}
                onChange={(event) => handleAddress(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Adresse de livraison 2 : {user.adresse_de_livraison_2}
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre adresse"
                fullWidth
                value={address2}
                onChange={(event) => handleAddress2(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1" color="primary">
                Adresse de livraison 3 : {user.adresse_de_livraison_3}
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                placeholder="Votre adresse"
                fullWidth
                value={address3}
                onChange={(event) => handleAddress3(event)}
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <Typography variant="body1" color="primary">
                  Choisissez votre mode de paiement
                </Typography>
              </FormLabel>
              <RadioGroup value={paymentMode} onChange={handlePaymentMode}>
                <FormControlLabel value="cb" control={<Radio />} label="Carte Bancaire" />
                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
              </RadioGroup>
            </FormControl>
            </ListItem>
          </List>
          <Button fullWidth type="submit">
            <Typography variant="h6" color="primary">
              Modifier mes informations
            </Typography>
          </Button>
        </form>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ReducedFooter />
      </Grid>
    </Grid>
  );
};

export default EditUserInfo;
