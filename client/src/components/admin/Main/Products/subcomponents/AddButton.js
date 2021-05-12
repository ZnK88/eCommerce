import React from 'react';

import { useStyles } from '../classes/addButtonStyles.js';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AddButton = () => {
    
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Button className={classes.button} href="/admin/articles/ajouter">
                <AddIcon className={classes.icon} />
                <Typography variant="body1" color="secondary">
                    Ajouter un produit
                </Typography>
            </Button>
        </Box>
    );
}

export default AddButton;