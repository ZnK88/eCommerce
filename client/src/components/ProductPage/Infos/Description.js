import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../../pages/ProductPage/Styles/ProductStyles';

const Description = ({ article }) => {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent>
                <Typography variant="h6" color="secondary">
                    Description :
                </Typography>
                <Typography variant="body1" color="secondary">
                    {article.description}
                </Typography>
                <Typography variant="h6" color="secondary">
                    Catégorie :
                </Typography>
                <Typography variant="body1" color="secondary">
                    {article.categorie}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Description;