import React from 'react';

//Components imports
import Headbar from './Headbar/Headbar';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import UnauthoriedAccess from './auth/UnauthorizedAccess';

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';

const Admin = () => {

    let token = localStorage.getItem('tokenAdmin');
    if (token && token !== "undefined") {
        return (
            <Box>
                <Headbar />
                <Grid container justify="space-between" spacing={4}>
                    <Grid item lg={2} md={3} xs={1}>
                        <Sidebar />
                    </Grid>
                    <Grid item lg={10} md={8} xs={12}>
                        <Main />
                    </Grid>
                </Grid>
            </Box>
        );
    }
    else {
        return (
            <Box>
                <UnauthoriedAccess />
            </Box>
        );
    }
}

export default Admin;