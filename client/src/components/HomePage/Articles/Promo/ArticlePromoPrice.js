import React from 'react';
import { useStyles } from '../ArticlesStyles.js';

const PromoArticlePrice = ({ item }) => {
    const classes = useStyles();

    let price = item.prix;
    let prom = item.prix_reduit;
    
    let final = price - (price*(prom/100));
    const num = Number(final);
    let roundedFinal = num.toFixed(2);
    
    if (typeof prom !== 'undefined' && prom !== 0) {
        return(
            <div className={classes.PromoPrice}>
                Promo : <b>{roundedFinal} €</b>
            </div>
        );
    } else {
        return(<div></div>)
    }
}

export default PromoArticlePrice;