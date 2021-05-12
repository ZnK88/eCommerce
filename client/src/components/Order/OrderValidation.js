import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import ReducedHeader from '../Header/ReducedHeader';
import OrderTable from './OrderTable';

import Grid from '@material-ui/core/Grid';
import { Alert } from '@material-ui/lab';

const OrderValidation = ({ match }) => {
    
    const [order, setOrder] = useState([]);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {

        const getOrderById = () => {
            Axios.get(`http://localhost:5000/commande/${match.params.id}`)
            .then(response => {
                setOrder(response.data);
                setSuccessMsg(true);
            })
            .catch(error => {
                console.log(error);
                setErrorMsg(error);
            });
        }
        
        getOrderById();

    }, [match.params.id]);
    
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                { successMsg && (
                    <OrderTable order={order} />
                )}
                { errorMsg && (
                    <Alert severity="error">{errorMsg}</Alert>
                )}
            </Grid>
        </Grid>
    );
}

export default OrderValidation;