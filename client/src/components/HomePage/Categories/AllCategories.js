import React from 'react';

import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import { useStyles } from './CategoriesStyles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ClassIcon from '@material-ui/icons/Class';
import HomeIcon from '@material-ui/icons/Home';

const AllCategories = () => {
    
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Header />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.overline}>
                <Breadcrumbs className={classes.breadcrumbs} color="primary">
                    <Link href="/" className={classes.flex} color="secondary">
                        <HomeIcon className={classes.smallIcon} />
                        <Typography variant="body1" color="primary">
                            Accueil
                        </Typography>
                    </Link>
                    <Link href="/categories" className={classes.flex} color="secondary">
                        <ClassIcon className={classes.smallIcon} />
                        <Typography variant="body1" color="primary">
                            Catégories
                        </Typography>
                    </Link>
                </Breadcrumbs>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default AllCategories;