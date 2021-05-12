import React from 'react';
import { useStyles } from '../ArticlesStyles';

const PromoArticlePin = ({ item }) => {
    const classes = useStyles();

    let prom = item.prix_reduit;

    if (typeof prom !== 'undefined' && prom !== 0) {
        return(
            <div className={classes.PromoProduct}>
                <b> - {prom} % </b>
            </div>
        );
    } else {
        return(<div></div>);
    }
}

export default PromoArticlePin;