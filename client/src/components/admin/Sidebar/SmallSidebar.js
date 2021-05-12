import React, { useState } from 'react';

import { useStyles } from './classes/smallSidebarStyles.js';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

const SmallSidebar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    const classes = useStyles();

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon className={classes.icon} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Link href="/admin">
                        <Typography variant="body1" color="secondary" >
                            Dashboard
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/articles">
                        <Typography variant="body1" color="secondary">
                            Produits
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/membres">
                        <Typography variant="body1" color="secondary">
                            Membres
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/rapports">
                        <Typography variant="body1" color="secondary">
                            Rapports
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/">
                        <Typography variant="body1" color="secondary">
                            Mon Site
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/" onClick={handleLogout}>
                        <Typography variant="body1" color="secondary">
                            Déconnecter
                        </Typography>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default SmallSidebar;