import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    loader: {
        borderRadius: '0.625rem',
        backgroundColor: '#EDEDEF',
        opacity: '0.4',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});