import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import ReducedHeader from '../Header/ReducedHeader';
import UserInfo from './subcomponents/UserInfo';

import Grid from '@material-ui/core/Grid';
import UserOrders from './subcomponents/UserOrders';

const UserAccount = () => {
    
    const [userId, setUserId] = useState("");

    useEffect(() => {
    
        const getuserId = () => {
            let token = localStorage.getItem('token');
            Axios.get(`http://localhost:5000/users`, {
                headers: {
                    token: token
                }
            }).then(response => {
                setUserId(response.data._id);
            })
            .catch(error => {
                console.log(error);
            });
        };
        
        getuserId();
    }, []);
    
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <UserInfo />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <UserOrders userId={userId} />
            </Grid>
        </Grid>
    );
}

export default UserAccount;