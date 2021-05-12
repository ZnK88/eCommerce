import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import ProductImg from '../../../../assets/temp-icon/product.png';
import { useStyles } from './classes/productDetailsStyles.js';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const ProductDetails = ({ match }) => {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [nbInStock, setNbInStock] = useState("");
    const [image, setImage] = useState("");
    

    useEffect(() => {
        let apiURL = `http://localhost:5000/articles/${match.params.id}`;
        
        Axios.get(apiURL)
        .then(response => {
            setId(response.data._id);
            setName(response.data.nom);
            setModel(response.data.model);
            setCategory(response.data.categorie);
            setDesc(response.data.description);
            setPrice(response.data.prix);
            setImage(response.data.convertedImg);
            if (response.data.en_stock === true) {
                setStock("Oui");
            }
            else setStock("Stock épuisé");
            setNbInStock(response.data.nombre_en_stock)
        })
        .catch(error => {
            console.log(error.response);
    })}, [match.params.id]);

    const classes = useStyles();

    return (
        <Card className={classes.lgContainer}>
            <CardActionArea>
                <CardMedia
                    className={classes.lgMedia}
                    image={image || ProductImg}
                    title={match.params.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color="secondary">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        Catégorie : {category}<br />
                        Description : {desc}<br />
                        Modèle : {model}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        Prix : {price} €<br />
                        Stock : {stock}<br />
                        Nombre d'articles en stock : {nbInStock}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" href={`/admin/articles/editer/${id}`}>
                    Editer l'article
                </Button>
                <Button size="small" color="secondary" href={`/admin/articles/evenement/${id}`}>
                    Ajouter un événement
                </Button>
                <Button size="small" color="secondary" href={`/admin/articles/supprimer/${id}`}>
                    Supprimer l'article
                </Button>
            </CardActions>
      </Card>
    );
}

export default ProductDetails;