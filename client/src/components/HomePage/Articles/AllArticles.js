import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from './ArticlesStyles';
import Article from './Article';
import Header from '../../Header/Header';
import SearchForm from '../../Search/SearchForm';
import Footer from '../Footer/Footer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ClassIcon from '@material-ui/icons/Class';
import HomeIcon from '@material-ui/icons/Home';

import Grid from '@material-ui/core/Grid';


const Articles = () => {
    
    const classes = useStyles();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        
        const fetchArticles = async () => {
            const result = await Axios.get("http://localhost:5000/articles");
            setArticles(result.data);
        }

        fetchArticles();
        
    }, []);
    
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Header />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.overline}>
                <Breadcrumbs className={classes.breadcrumbs} color="primary">
                    <Link href="/" className={classes.flexLink} color="secondary">
                        <HomeIcon className={classes.smallIcon} />
                        <Typography variant="body1" color="primary">
                            Accueil
                        </Typography>
                    </Link>
                    <Link href="/articles" className={classes.flexLink} color="secondary">
                        <ClassIcon className={classes.smallIcon} />
                        <Typography variant="body1" color="primary">
                            Articles
                        </Typography>
                    </Link>
                </Breadcrumbs>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SearchForm />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className={classes.flex}>
                    {
                        articles.map((item, index) => {
                            return <Article key={index} item={item} />
                        })
                    }
                </div>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Footer />
            </Grid>
            </Grid>
        </Grid>
    );
}

export default Articles;