import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    overline: {
        borderTop: '0.0625rem solid #EDEDEF',
        marginTop: '1.5rem',
    },
    container: {
        backgroundColor: '#EDEDEF',
        textAlign: 'center',
        margin: '1rem',
        padding: '1rem',
    },
    wrapper: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    link: {
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    linked: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: '0.5rem',
    },
    breadcrumbs: {
        marginTop: '1rem',
    },
});