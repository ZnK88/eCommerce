import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        height: 350,
        width: 200,
        margin: '0.2rem',
        backgroundColor: '#EDEDEF',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    },
    actionsArea: {
        height: 250,
    }
});