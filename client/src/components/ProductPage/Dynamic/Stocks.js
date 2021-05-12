import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../../pages/ProductPage/Styles/ProductStyles';

const Stocks = ({ article }) => {
    const classes = useStyles();

    return(
        <Card className={classes.containerSlim}>
            <CardActionArea>
                <CardContent>
                    <Typography color="secondary" variant="h6">
                        Stocks : {article.nombre_en_stock}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Stocks;