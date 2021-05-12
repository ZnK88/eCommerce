import React from 'react';

import ReducedHeader from '../Header/ReducedHeader';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';

const GuestValidation = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Alert severity="success">
                    <AlertTitle>
                        <Typography variant="h6" color="secondary">
                            Commande passée avec succès
                        </Typography>
                    </AlertTitle>
                    <Typography variant="body1" color="secondary">
                        Votre commande a été prise en compte, veuillez vérifier votre boîte mail pour trouver votre facture.
                    </Typography>
                </Alert>
            </Grid>
        </Grid>
    );
}

export default GuestValidation;