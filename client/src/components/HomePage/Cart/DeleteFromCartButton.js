import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DeleteFromCart = ({ item }) => {
    
    const id = item._id;
    
    const deleteItem = () => {
        let itemsList = JSON.parse(localStorage.getItem("Cart"));

        if (itemsList.length !== 0) {
            for (let i = 0; i < itemsList.length; i++){ 
                if (itemsList[i]['_id'] === id) { 
                    itemsList.splice(i, 1);
                }
            }

            itemsList = JSON.stringify(itemsList);
            localStorage.setItem("Cart", itemsList);
            window.location.reload(false);
        } else {
            localStorage.removeItem("Cart");
        }

    }
    
    return (
        <Button size="small" onClick={deleteItem}>
            <Typography variant="body2" color="secondary">
                Supprimer du panier
            </Typography>
        </Button>
    );
}

export default DeleteFromCart;