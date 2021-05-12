import React from 'react';

import { useStyles } from "./classes/largeSidebarStyles.js";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import StoreIcon from '@material-ui/icons/Store';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import WebIcon from '@material-ui/icons/Web';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LargeSidebar = () => {

    const classes = useStyles();
    
    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <List className={classes.container}>
            <ListItem>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <DashboardIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/admin">
                            <Typography variant="body1" color="primary" >
                                Dashboard
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
            <ListItem>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <StoreIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/admin/articles">
                            <Typography variant="body1" color="primary">
                                Produits
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
            <ListItem>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <FaceIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/admin/membres">
                            <Typography variant="body1" color="primary">
                                Membres
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
            <ListItem>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <EqualizerIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/admin/rapports">
                            <Typography variant="body1" color="primary">
                                Rapports
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
            <ListItem className={classes.overlined}>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <WebIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/">
                            <Typography variant="body1" color="primary">
                                Mon Site
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
            <ListItem>
                <List className={classes.inlineList}>
                    <ListItemIcon>
                        <ExitToAppIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/" onClick={handleLogout}>
                            <Typography variant="body1" color="primary">
                                Déconnecter
                            </Typography>
                        </Link>
                    </ListItemText>
                </List>
            </ListItem>
        </List>
    );
}

export default LargeSidebar;