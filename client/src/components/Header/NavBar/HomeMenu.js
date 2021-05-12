import React, { useState } from 'react';

import { useStyles } from './NavbarStyles';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const HomeMenu = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
    }

    const classes = useStyles();
    
    let token = localStorage.getItem('token');
    if (token && token !== "undefined") {
        return (
            <div>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon color="primary" />
                        </Button>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Menu
                        </Typography>
                    </ListItemText>
                </List>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Link href="/">
                            <Typography variant="body1" color="secondary" >
                                Odin
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/compte">
                            <Typography variant="body1" color="secondary">
                                Mon compte
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
    } else {
        return (
            <div>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon color="primary" />
                        </Button>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Menu
                        </Typography>
                    </ListItemText>
                </List>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Link href="/">
                            <Typography variant="body1" color="secondary" >
                                Odin
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/connexion">
                            <Typography variant="body1" color="secondary">
                                Connexion
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/inscription">
                            <Typography variant="body1" color="secondary">
                                Inscription
                            </Typography>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default HomeMenu;