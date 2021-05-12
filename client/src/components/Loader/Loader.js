import React from 'react';

import { useStyles } from './LoaderStyles';

import Box from '@material-ui/core/Box';
import { Alert } from '@material-ui/lab';

const Loader = () => {
    
    const classes = useStyles();

    return (
        <Box className={classes.loader}>
            <Alert severity="info">En attente de chargement ...</Alert>
        </Box>
    );
}

export default Loader;