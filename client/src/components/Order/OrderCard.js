import React from 'react';

import { useStyles } from './Styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const OrderCard = ({ item }) => {
    
    const classes = useStyles();
    
    return (
        <Card className={classes.smallCard}>
            <CardContent>
                <Typography variant="body1" color="secondary">
                    {item.nom}
                </Typography>
                <Typography variant="body1" color="secondary">
                    {item.prix} €
                </Typography>
            </CardContent>
        </Card>
    );
}

export default OrderCard;