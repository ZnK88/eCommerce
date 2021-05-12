import React from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStyles } from './Styles.js';

import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const CartIcon = () => {
    
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.container}>
            <List className={classes.inlineList}>
                <ListItemIcon>
                    <AddShoppingCartIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Link href="/panier">
                        <Typography variant="body1" color="primary" className={classes.link}>
                            Mon panier
                        </Typography>
                    </Link>
                </ListItemText>
            </List>
        </Paper>
    );
}

export default CartIcon;