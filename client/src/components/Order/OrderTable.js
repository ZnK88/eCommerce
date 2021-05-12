import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Alert } from '@material-ui/lab';

const OrderTable = ({ order }) => {

    return (
        <Card>
            <CardContent>
                <Grid container justify="space-evenly">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Alert severity="success">
                            <Typography variant="h6" color="secondary">
                                Votre commande a été validée avec succès !
                            </Typography>
                        </Alert>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h6" color="secondary">
                            Votre numéro de commande : {order._id}
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="body1" color="secondary">
                            Récapitulatif des articles :
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <List>
                            {
                                order.articles.map((article, index) => {
                                    return <ListItem key={index}>
                                        <Typography variant="body1">
                                            - {article.nom} - {article.prix} €
                                        </Typography>
                                    </ListItem>
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h6" color="secondary">
                            Merci pour votre achat et à bientôt sur Odin !
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default OrderTable;