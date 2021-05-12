import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from './Styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router';

const OrderUserRecap = () => {
    
    const classes = useStyles();

    const [user, setUser] = useState([]);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        const getuserInfo = () => {
            let token = localStorage.getItem('token');
            Axios.get(`http://localhost:5000/users`, {
                headers: {
                    token: token
                }
            }).then(response => {
                setSuccessMsg(true);
                setUser(response.data);
            })
            .catch(error => {
                setErrorMsg(error.response.data.msg);
            })
        }

        getuserInfo();
    }, []);

    const completeUserInfo = () => {
        let name = user.nom;
        let firstName = user.prenom;
        let email = user.email;

        if (!name || !firstName || !email || !address ||
            name === undefined || firstName === undefined || email === undefined || address === undefined) {
            setErrorMsg("Merci de compléter vos informations");
        }
        else history.push("/information/paiement");
    }

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <Box>
            { successMsg && (
                <Card className={classes.card}>
                    <CardContent className={classes.background}>
                        <Typography variant="h6" color="secondary">
                            Informations de votre compte
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container justify="space-around">
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary" className={classes.bold}>
                                    Nom : 
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary">
                                    {user.nom || "Non rempli"}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-around">
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary" className={classes.bold}>
                                    Prénom : 
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary">
                                    {user.prenom || "Non rempli"}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-around">
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary" className={classes.bold}>
                                    Adresse e-mail : 
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <Typography variant="body1" color="secondary">
                                    {user.email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-around">
                        <FormControl>
                            <FormLabel component="legend">Choisir une adresse de livraison</FormLabel>
                                <RadioGroup value={address} onChange={handleChange}>
                                    <FormControlLabel value={user.adresse_de_livraison} control={<Radio />} label={user.adresse_de_livraison || "Non rempli"} />
                                    <FormControlLabel value={user.adresse_de_livraison_2} control={<Radio />} label={user.adresse_de_livraison_2 || "Non rempli"} />
                                    <FormControlLabel value={user.adresse_de_livraison_3} control={<Radio />} label={user.adresse_de_livraison_3 || "Non rempli"} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Typography variant="h6" onClick={completeUserInfo}>
                                Confirmer vos informations
                            </Typography>
                        </Button>
                        <Button size="small" href={`/compte/editer/${user._id}`}>
                            <Typography variant="h6">
                                Compléter vos informations
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
            )}
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
        </Box>
    );
}

export default OrderUserRecap;