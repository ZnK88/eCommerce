import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    icon: {
        color: '#1E2027',
        margin: 0,
        marginRight: '1rem',
        marginLeft: '1.5rem',
    },
    search: {
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
    input: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        color: '#1E2027',
        width: '80%',
    },
    button: {
        marginRight: '1rem',
        marginLeft: '1.5rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
});