import React from 'react';

import { useStyles } from '../Articles/ArticlesStyles.js';
import ProductIcon from '../../../assets/temp-icon/product.png';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteFromCart from './DeleteFromCartButton.js';

const ArticleInCart = ({ item }) => {
    
    const classes = useStyles();
    
    return (
        <Card className={classes.container}>
            <CardActionArea className={classes.actionsArea} href={`/articles/${item._id}`}>
                <CardMedia
                    className={classes.media}
                    image={item.convertedImg || ProductIcon}
                    title={item.nom}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color="secondary" className={classes.underline}>
                        { item.nom }
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        { item.prix } €
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" href={`/articles/${item._id}`}>
                    <Typography variant="body2" color="secondary">
                        Voir les détails
                    </Typography>
                </Button>
                <DeleteFromCart item={item} />
            </CardActions>
        </Card>
    );
}

export default ArticleInCart;