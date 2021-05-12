import React from 'react';

import NavbarOrMenu from './NavBar/NavbarOrMenu';
import CartIcon from './CartIcon/CartIcon';
import Categories from './Categories/Categories';

import Grid from '@material-ui/core/Grid';

const Header = () => {
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <NavbarOrMenu />
            </Grid>
            <Grid item lg={10} md={10} />
            <Grid item lg={2} md={2} sm={12} xs={12}>
                <CartIcon />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Categories />
            </Grid>
        </Grid>
    );
}

export default Header;