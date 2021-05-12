import React from 'react';

import moment from 'moment-timezone';
import { useStyles } from '../ArticlesStyles.js';

const NewArticlePin = ({ item }) => {
    const classes = useStyles();

    moment.locale("fr");

    let currentDate = moment.tz(Date.now(), "Europe/Paris");
    let subtractDate = moment(currentDate).subtract(30, "days");
    let formatedSubDate = moment(subtractDate).format("YYYY-MM-DD");

    let productDate = item.date_de_creation;

    if (typeof productDate !== 'undefined' && productDate !== null && productDate >= formatedSubDate) {
        return(
            <span className={classes.NewProduct}>
                 Nouveauté 
            </span>
        );
    } else {
        return(<span></span>)
    }
}

export default NewArticlePin;