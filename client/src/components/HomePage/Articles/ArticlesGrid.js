import React from 'react';

import { useStyles } from './ArticlesStyles';
import Article from './Article';
import Loader from '../../Loader/Loader';

const ArticlesGrid = ({ items, isLoading }) => {
    
    const classes = useStyles();
    
    return isLoading ? (
        <Loader />
    ) : (
        <div className={classes.flex}>
            {
                items.map((item) => {
                    return <Article key={item._id} item={item} />
                })
            }
        </div>
    )
}

export default ArticlesGrid;