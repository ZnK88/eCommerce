import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../Search/SearchForm';
import FilterButton from './Filters/FilterButton';
import Footer from './Footer/Footer';

import Grid from '@material-ui/core/Grid';

const Home = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Header />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SearchForm />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <FilterButton />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default Home;