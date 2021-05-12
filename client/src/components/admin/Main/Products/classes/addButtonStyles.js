import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#EDEDEF',
        opacity: '0.4',
        margin: '0.5rem',
        height: 'auto',
    },
    icon: {
        color: '#1E2027',
        marginRight: '0.5rem',
    },
});