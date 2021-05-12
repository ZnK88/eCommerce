import React from 'react';

import ProductIcon from '../../../assets/temp-icon/product.png';
import { useStyles } from './ArticlesStyles.js';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddToCartButton from '../Cart/AddToCartButton';

import PromoArticlePin from './Promo/ArticlePromoPin';
import PromoArticlePrice from './Promo/ArticlePromoPrice';
import NewArticlePin from './Promo/NewArticlePin';

const Article = ({ item }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.container}>
            <CardActionArea className={classes.actionsArea} href={`/articles/${item._id}`}>
                <Card style={{
                    position: 'relative',
                    textDecoration: 'none'
                    }} >
                    <CardMedia
                        className={ classes.media }
                        image={ item.convertedImg || ProductIcon }
                        title={ item.nom }
                    />
                    <NewArticlePin
                        item = { item }
                        productDate={ item.date_de_creation }
                        className={ classes.NewProduct }
                    />
                    <PromoArticlePin
                        className={ classes.PromoProduct }
                        item = { item }
                        prom = { item.prix_reduit }
                    />
                </Card>
                <CardContent>
                    <Typography gutterBottom variant="h6" color="secondary" className={classes.underline}>
                        { item.nom }
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        { item.prix } €
                    </Typography>
                    <PromoArticlePrice 
                        className={ classes.PromoProduct }
                        item = { item }
                        prom = { item.prix_reduit }
                        price = { item.prix }
                    />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <AddToCartButton item={item} />
                <Button size="small" href={`/articles/${item._id}`}>
                    <Typography variant="body2" color="secondary">
                        Voir les détails
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}

export default Article;