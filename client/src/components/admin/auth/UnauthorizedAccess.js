import React from 'react';

import { useStyles } from './classes/accessStyles.js';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';

const UnauthorizedAccess = () => {
    
    const classes = useStyles();
    
    return (
        <Box className={classes.container}>
            <Alert>
                <AlertTitle>Vous n'avez pas accès à cette page</AlertTitle>
                Pour vous authentifier en tant qu'administrateur cliquez sur le lien.
            </Alert>
            <Button href="/login/admin">
                <Typography variant="h6" color="secondary">
                    S'authentifier
                </Typography>
            </Button>
        </Box>
    );
}

export default UnauthorizedAccess;