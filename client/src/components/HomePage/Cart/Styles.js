import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#1E2027',
        margin: '1rem',
        textAlign: 'center',
        padding: '1rem',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overline: {
        borderTop: '0.0625rem solid #EDEDEF',
        marginTop: '1.5rem',
    },
    breadcrumbs: {
        marginTop: '1rem',
    },
    flexLink: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallIcon: {
        width: 20,
        height: 20,
        marginRight: '0.5rem',
    },
})