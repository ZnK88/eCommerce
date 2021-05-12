import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Searchbar from './Searchbar';
import ArticlesGrid from '../HomePage/Articles/ArticlesGrid';

import { useStyles } from './SearchStyles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Search = () => {
    
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
        <Grid container justify="space-between">
            <Grid item lg={12} md={12} xs={12}>
                <Searchbar getQuery={(q) => setQuery(q)} />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
                <Box className={classes.flex}>
                    <ArticlesGrid isLoading={isLoading} items={items} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Search;