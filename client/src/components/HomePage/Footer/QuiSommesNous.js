import React from 'react';

import { useStyles } from './Styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const QuiSommesNous = () => {
    
    const classes = useStyles();
    
    return (
        <Paper elevation={4} className={classes.container}>
            <Typography variant="body2" color="primary">
                [Back-end] Jason, Mikelback & Victor
            </Typography>
            <Typography variant="body2" color="primary">
                [Front-end] Narek & Victoria
            </Typography>
            <Typography variant="body2" color="primary">
                Mention spéciale à notre fronteur & SCRUM Master Maître Didoune Grand Seigneur du Trello
            </Typography>
        </Paper>
    );
}

export default QuiSommesNous;