import React, { useState, useEffect } from 'react';

import { useStyles } from './Styles';
import ReducedHeader from '../Header/ReducedHeader';
import OrderUserRecap from './OrderUserRecap';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OrderUser = () => {

    const [isLoggedIn, setIsLoggedIn] = useState("");
    
    const isUserLoggedIn = () => {
        let token = localStorage.getItem("token");

        if (token) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }

    useEffect(() => {
        isUserLoggedIn();
    }, []);

    const classes = useStyles();
    
    return (
        <Grid container justify="space-around">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            { !isLoggedIn && (
            <Grid container justify="space-evenly">
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Button href="/connexion" className={classes.button}>
                        <Typography variant="h6" color="primary">
                            Je suis déjà client
                        </Typography>
                    </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Button href="/inscription" className={classes.button}>
                        <Typography variant="h6" color="primary">
                            Je souhaite devenir client
                        </Typography>
                    </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Button href="/invite" className={classes.button}>
                        <Typography variant="h6" color="primary">
                            Je commande en tant qu'invité
                        </Typography>
                    </Button>
                </Grid>
            </Grid> 
            )}
            { isLoggedIn && (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <OrderUserRecap />
                </Grid>
            )}
        </Grid>
    );
}

export default OrderUser;