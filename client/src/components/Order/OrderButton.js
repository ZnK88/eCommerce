import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OrderButton = () => {
    
    return (
        <Button size="small" href="/commande">
            <Typography variant="h6" color="primary">
                Commander
            </Typography>
        </Button>
    );
}

export default OrderButton;