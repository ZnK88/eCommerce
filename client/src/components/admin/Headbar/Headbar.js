import React from 'react';
import Moment from 'moment';

import { useStyles } from './Styles.js';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HomeIcon from '@material-ui/icons/Home';

const Headbar = () => {
    
    const M = Moment();
    const classes = useStyles();
    
    return (
        <Box className={classes.container}>
            <Box className={classes.inlineContainer}>
                <HomeIcon color="secondary" />
                <Typography variant="h6" color="primary">
                    Odin Administration
                </Typography>
                <CalendarTodayIcon color="secondary" />
                <Typography variant="h6" color="primary">
                    { M.format("dddd MMM YYYY") }
                </Typography>
                <QueryBuilderIcon color="secondary" />
                <Typography variant="h6" color="primary">
                    { M.format("HH : mm") }
                </Typography>
            </Box>
        </Box>
    ); 
}

export default Headbar;