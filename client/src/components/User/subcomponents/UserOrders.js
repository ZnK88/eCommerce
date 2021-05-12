import React, { useState } from 'react';
import Axios from 'axios';

import { useStyles } from '../Styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const UserOrders = ({ userId }) => {
    

    const classes = useStyles();
    const [ordersList, setOrdersList] = useState([]);
    

    const handleClick = () => {
        Axios.get(`http://localhost:5000/commande/userid/${userId}`)
        .then(response => {
            setOrdersList(response.data);
        })
        .catch(error => {
            console.log(error.response.data.msg);
        });
    }

    return (
        <Box className={classes.wrapper}>
            <Button size="small" onClick={handleClick}>
                <Typography variant="h6" color="primary">
                    Voir mes commandes passées
                </Typography>
            </Button>
            <List>
                {
                    ordersList.map((order, index) => {
                        return <ListItem key={index}>
                            <Link href={`/compte/commande/${order._id}`}>
                                <Typography variant="body1" color="primary">
                                    Numéro de commande : {order._id}
                                </Typography>
                            </Link>
                        </ListItem>
                    })
                }
            </List>
        </Box>
    );
}

export default UserOrders;