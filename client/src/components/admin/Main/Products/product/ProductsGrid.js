import React from 'react';

import { useStyles } from '../classes/productsStyles';
import Product from '../Product';
import Loader from '../../../../Loader/Loader';

const ProductsGrid = ({ items, isLoading }) => {
    
    const classes = useStyles();
    
    return isLoading ? (
        <Loader />
    ) : (
        <div className={classes.flex}>
            {
                items.map((item) => {
                    return <Product key={item._id} item={item} />
                })
            }
        </div>
    )
}

export default ProductsGrid;