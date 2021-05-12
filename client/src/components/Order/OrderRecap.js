import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import OrderCard from './OrderCard';
import { useStyles } from './Styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';


const OrderRecap = () => {

    const classes = useStyles();

    const history = useHistory();
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('Cart')));
    const [errorMsg, setErrorMsg] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {

        const getItems = () => {
            if (!items) {
                setErrorMsg("Votre panier est actuellement vide");
            } else {
                setItems(JSON.parse(localStorage.getItem('Cart')));
                let prices = [];
                items.map((item) => {
                    return prices.push(item.prix);
                })

                let addition = prices.reduce((a, b) => a + b)
                const num = Number(addition);
                let roundedTotal = num.toFixed(2);
                setTotal(roundedTotal);
            }
        }

        getItems();
    }, []);

    const handleOrder = () => {
        let token = localStorage.getItem('token');
        if (total > 1000 && !token) {
            history.push("/compte/invite");
        }
        else {
            history.push("/information")
        }
    }

    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6" color="primary">
                    Récapitulatif de votre commande
                </Typography>
            </Grid>
            {errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
            <Grid item lg={12} md={12} sm={12} xs={12}>
                {
                    items.map((item, index) => {
                        return <OrderCard key={index} item={item} />
                    })
                }
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6" color="primary">
                    Total à payer : {total} €
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button onClick={handleOrder} className={classes.button}>
                    <Typography variant="h6" color="primary">
                        Confirmer
                    </Typography>
                </Button>
                <Button href="/" className={classes.button}>
                    <Typography variant="h6" color="primary">
                        Continuer mes achats
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default OrderRecap;