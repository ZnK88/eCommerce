import React from 'react';
import ReducedHeader from '../Header/ReducedHeader';

import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const GuestAccount = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Alert severity="warning">
                    <AlertTitle>
                        <Typography variant="h6" color="secondary">
                            Création de compte requise
                        </Typography>
                    </AlertTitle>
                    <Typography variant="body1" color="secondary">
                        Le montant de votre panier dépasse 1 000€, nous vous demandons de vous créer un compte pour passer commande.
                    </Typography>
                    <Button href="/inscription">
                        <Typography variant="body1" color="secondary">
                            Créer un compte
                        </Typography>
                    </Button>
                    <Button href="/connexion">
                        <Typography variant="body1" color="secondary">
                            J'ai déjà un compte
                        </Typography>
                    </Button>
                    <Button href="/panier">
                        <Typography variant="body1" color="secondary">
                            Retour au panier
                        </Typography>
                    </Button>
                </Alert>
            </Grid>
        </Grid>
    );
}

export default GuestAccount;