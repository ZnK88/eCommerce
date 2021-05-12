import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReducedHeader from '../../Header/ReducedHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const UserOrderDetails = ({ match }) => {

    const [order, setOrder] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getOrder = () => {
            Axios.get(`http://localhost:5000/commande/${match.params.id}`)
            .then(response => {
                setOrder(response.data);
                setItems(response.data.articles)
            })
            .catch(error => {
                console.log(error);
            })

        }

        getOrder();
    }, [match.params.id]);

    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid container justify="space-evenly">
                <Grid item lg={10} md={10} sm={10} xs={10}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" color="secondary">
                                Commande numéro {order._id}
                            </Typography>
                            <List>
                            {
                                items.map((item, index) => {
                                    return <ListItem key={index}>
                                        <Typography variant="body1" color="secondary">
                                            - {item.nom} - {item.prix} €
                                        </Typography>
                                    </ListItem>
                                })
                            }
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default UserOrderDetails;