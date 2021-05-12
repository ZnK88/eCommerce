import React from 'react';

import ReducedHeader from '../Header/ReducedHeader';
import OrderRecap from './OrderRecap';

import Grid from '@material-ui/core/Grid';

const Order = () => {

    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <OrderRecap />
            </Grid>
        </Grid>
    );
}

export default Order;