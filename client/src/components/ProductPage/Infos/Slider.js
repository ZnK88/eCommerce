import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';

import DefaultImage from '../../../assets/temp-icon/product.png';
import { useStyles } from '../../../pages/ProductPage/Styles/ProductStyles';

const Slider = ({ article }) => {
    const classes = useStyles();

    return(
        <CardMedia
            className={classes.media}
            image={article.convertedImg || DefaultImage}
            title={article.nom} />
    );
}

export default Slider;