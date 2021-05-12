import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#1E2027',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '1rem',
        padding: '0.2rem',
    },
    inlineList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        '&:hover': {
            textDecoration: 'underline',
        }
    },
});