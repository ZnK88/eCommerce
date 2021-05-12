import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from './CategoriesStyles';
import Article from '../Articles/Article';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';


import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchForm from '../../Search/SearchForm';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ClassIcon from '@material-ui/icons/Class';
import HomeIcon from '@material-ui/icons/Home';

const CategoryDetails = ({ match }) => {

    const classes = useStyles();

    const [articles, setArticles] = useState([]);
    const [categorie, setCategorie] = useState("");
    
    useEffect(() => {

        const getArticles = async () => {
            const result = await Axios.get(`http://localhost:5000/categories/${match.params.name}`);
            setCategorie(match.params.name);
            setArticles(result.data);
        }

        getArticles();
    }, [match.params.name]);

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
                    <Link href={`/categories/${match.params.name}`} className={classes.flex} color="secondary">
                        <LocationOnIcon className={classes.smallIcon} />
                        <Typography variant="body1" color="primary">
                            {match.params.name}
                        </Typography>
                    </Link>
                </Breadcrumbs>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SearchForm />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.overline}>
                <Typography variant="h6" color="primary" className={classes.text}>
                    {categorie}
                </Typography>
                <Box className={classes.wrapper}>
                    {
                        articles.map((item) => {
                            return <Article key={item._id} item={item} />
                        })
                    }
                </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default CategoryDetails;