import React from 'react';

import { useStyles } from './Styles.js';
import QuiSommesNous from './QuiSommesNous';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    
    const classes = useStyles();
    
    return (
        <Grid container justify="space-around">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={10} className={classes.container}>
                    <Link href="/login/admin">
                        <Typography variant="body1" color="primary" className={classes.button}>
                            Accès Administration
                        </Typography>
                    </Link>
                </Paper>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <QuiSommesNous />
            </Grid>
        </Grid>
    );
}

export default Footer;