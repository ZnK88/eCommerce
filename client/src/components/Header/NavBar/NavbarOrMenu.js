import React from 'react';

import NavBar from './NavBar';
import Menu from './HomeMenu.js';

import Hidden from '@material-ui/core/Hidden';

const NavbarOrMenu = () => {
    return (
        <div>
            <Hidden only={['sm', 'xs']}>
                <NavBar />
            </Hidden>
            <Hidden only={['xl', 'lg', 'md']}>
                <Menu />
            </Hidden>
        </div>
    );
}

export default NavbarOrMenu;