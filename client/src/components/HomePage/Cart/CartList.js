import React, { useState, useEffect } from 'react';

import { useStyles } from './Styles';
import ArticleInCart from './ArticleInCart';
import CartPrice from './CartPrice';
import OrderButton from '../../Order/OrderButton';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Alert } from '@material-ui/lab';

const CartList = () => {
    
    const classes = useStyles();

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('Cart')));
    const [errorMsg, setErrorMsg] = useState("");
    const [emptyCart, setEmptyCart] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {
        
        const getItems = () => {
            if (!items) {
                setErrorMsg("Votre panier est actuellement vide");
                setTotal(0);
            } else if (items.length !== 0) {
                setItems(JSON.parse(localStorage.getItem('Cart')));
                let prices = [];
                items.map((item) => {
                    return prices.push(item.prix);
                })
                setTotal(prices.reduce((a, b) => a + b));
            }
            else {
                setEmptyCart("Votre panier est vide");
            }
        }
        
        getItems();
    }, []);
    
    return (
        <Paper elevation={4} className={classes.container}>
            { errorMsg && (
                <Alert severity="info">
                    {errorMsg}
                </Alert>
            )}
            {
                items && (
                    <Grid container justify="space-evenly">
                        <Grid item lg={8} md={8} sm={8} xs={8} className={classes.flex}>
                            { emptyCart && (
                                <Alert severity="info">{emptyCart}</Alert>
                            )}
                        </Grid>
                        { !emptyCart && (
                        <Grid container justify="space-evenly">
                            <Grid item lg={8} md={8} sm={8} xs={8} className={classes.flex}>
                                {
                                    items.map((item, index) => {
                                        return <ArticleInCart key={index} item={item} />
                                    })
                                }
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} className={classes.overline}>
                                <CartPrice total={total} />
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} className={classes.overline}>
                                <OrderButton total={total} />
                            </Grid>
                        </Grid>
                        )}
                    </Grid>
                )
            }
        </Paper>
    );
}

export default CartList;