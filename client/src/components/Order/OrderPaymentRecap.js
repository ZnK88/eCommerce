import React from 'react';

import Grid from '@material-ui/core/Grid';
import ReducedHeader from '../Header/ReducedHeader';
import OrderPayment from './OrderPayment';

const OrderUserPayment = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <OrderPayment />
            </Grid>
        </Grid>
    );
}

export default OrderUserPayment;