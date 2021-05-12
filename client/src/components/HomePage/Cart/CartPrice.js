import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CartPrice = ({ total }) => {
    
    const num = Number(total);
    let roundedTotal = num.toFixed(2);
    
    return (
        <Box>
            <Typography variant="h6" color="primary">
                Prix total du panier : {roundedTotal} €
            </Typography>
        </Box>
    );
}

export default CartPrice;