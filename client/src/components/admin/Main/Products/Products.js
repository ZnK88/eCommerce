import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from './classes/productsStyles.js';
import Searchbar from '../../../Search/Searchbar';
import AddButton from './subcomponents/AddButton';
import ProductsGrid from './product/ProductsGrid';
// import Product from './Product';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Products = () => {
    
    const classes = useStyles();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    
    useEffect(() => {

        const getProducts = async () => {
            setIsLoading(true);
            const result = await Axios.get(`http://localhost:5000/search/${query}`)
            setItems(result.data);
            setIsLoading(false);
        }

        getProducts();
    }, [query]);

    return (
        <Box className={classes.container}>
            <Typography variant="h4" color="primary">
                Espace Produits
            </Typography>
            <Grid container justify="space-between">
                <Grid item lg={12} md={12} xs={12}>
                    <Searchbar getQuery={(q) => setQuery(q)} />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <AddButton />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <Box className={classes.flex}>
                        <ProductsGrid isLoading={isLoading} items={items} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Products;