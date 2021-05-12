import React from 'react';

import ProductIcon from '../../../../assets/temp-icon/product.png';
import { useStyles } from './classes/productStyles.js';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Product = ({ item }) => {
    
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardActionArea className={classes.actionsArea} href={`/admin/articles/${item._id}`}>
                <CardMedia
                    className={classes.media}
                    image={item.convertedImg || ProductIcon}
                    title={item.nom}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" color="secondary">
                    { item.nom }
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" href={`/admin/articles/editer/${item._id}`}>
                    Editer l'article
                </Button>
                <Button size="small" color="secondary" href={`/admin/articles/supprimer/${item._id}`}>
                    Supprimer l'article
                </Button>
            </CardActions>
        </Card>
    );
}

export default Product;