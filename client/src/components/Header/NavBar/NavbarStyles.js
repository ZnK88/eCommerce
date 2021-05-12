import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#EDEDEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        height: 65,
        borderRadius: '0.625rem',
    },
    button: {
        textDecoration: 'none',
        '&:hover' : {
           textDecoration: 'underline'
        }
    },
    inlineList: {
        display: 'flex',
        flexDirection: 'raw',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});