import React from 'react';

import { useStyles } from './NavbarStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import HomeIcon from '@material-ui/icons/Home';


const NavBar = () => {

    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    let token = localStorage.getItem('token');
    if (token && token !== "undefined") {
        return (
            <Grid container justify="space-between" className={classes.container}>
                <Grid item lg={2} md={2}>
                    <List className={classes.inlineList}>
                        <ListItemIcon>
                            <HomeIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                            <Link href="/">
                                <Typography variant="h6" color="secondary" className={classes.button}>
                                    Odin
                                </Typography>
                            </Link>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item lg={4} md={2} />
                <Grid item lg={2} md={2}>
                    <Link href="/compte">
                        <Typography variant="body1" color="secondary" className={classes.button}>
                            Mon compte
                        </Typography>
                    </Link>
                </Grid>
                <Grid item lg={2} md={2}>
                    <Link href="/" onClick={handleLogout}>
                        <Typography variant="body1" color="secondary" className={classes.button}>
                            Déconnecter
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container justify="space-between" className={classes.container}>
                <Grid item lg={2} md={2}>
                    <List className={classes.inlineList}>
                        <ListItemIcon>
                            <HomeIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                            <Link href="/">
                                <Typography variant="h6" color="secondary" className={classes.button}>
                                    Odin
                                </Typography>
                            </Link>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item lg={6} md={4} />
                <Grid item lg={2} md={2}>
                    <Link href="/connexion">
                        <Typography variant="body1" color="secondary" className={classes.button}>
                            Connexion
                        </Typography>
                    </Link>
                </Grid>
                <Grid item lg={2} md={2}>
                    <Link href="/inscription">
                        <Typography variant="body1" color="secondary" className={classes.button}>
                            Inscription
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

export default NavBar;