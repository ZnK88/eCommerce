import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AddToCartButton = ({ item }) => {

    const [items, setItems] = useState([]);
    const article = item;

    const addItem = () => {
        if (localStorage.getItem('Cart') == null) {
            const itemsInCart = [];
            itemsInCart.push(article);
            localStorage.setItem('Cart', JSON.stringify(itemsInCart));
        } else {
            const itemsInCart = JSON.parse(localStorage.getItem('Cart'));
            itemsInCart.push(article);
            localStorage.setItem('Cart', JSON.stringify(itemsInCart));
        }

        setItems({
            itemsInCart: JSON.parse(localStorage.getItem('Cart'))
        });
    }

    return (
        <Button size="small" onClick={addItem}>
            <Typography variant="body2" color="secondary">
                Ajouter au panier
            </Typography>
        </Button>
    );
}

export default AddToCartButton;

