import React from 'react';

import ReducedHeader from '../Header/ReducedHeader';
import GuestOrderForm from './GuestOrderForm';

import Grid from '@material-ui/core/Grid';


const GuestOrder = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <GuestOrderForm />
            </Grid>
        </Grid>
    );
}

export default GuestOrder;