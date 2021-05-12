import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from './Styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const Categories = () => {

    const classes = useStyles();

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        let apiURL = "http://localhost:5000/categories";
        const result = await Axios.get(apiURL)
        setCategories(result.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Grid container justify="space-around">
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.overline}>
                <Typography variant="h5" color="primary" className={classes.text}>
                    Catégories
                </Typography>
            </Grid>
            <div className={classes.wrapper}>
                {
                    categories.map((categorie, index) => {
                        return (
                            <Paper elevation={4} className={classes.container} key={index}>
                                <Link href={`/categories/${categorie._id}`} categorie={categorie}>
                                    <Typography variant="h6" color="secondary" className={classes.link}>
                                        { categorie._id }
                                    </Typography>
                                </Link>
                            </Paper>
                        )
                    })
                }
            </div>
        </Grid>
    );
}

export default Categories;