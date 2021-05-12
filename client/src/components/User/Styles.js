import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    card: {
        width: '70%',
        marginTop: '2rem',
    },
    background: {
        backgroundColor: '#1E2027',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        border: '0.02rem solid #EDEDEF',
        padding: '1rem',
        margin: '1rem',
    },
    bold: {
        fontWeight: 'bold',
    },
    form: {
        marginBottom: '2rem',
    },
    wrapper: {
        marginTop: '6rem',
        borderTop: '0.2rem solid #EDEDEF',
        paddingTop: '0.5rem',
    },
});