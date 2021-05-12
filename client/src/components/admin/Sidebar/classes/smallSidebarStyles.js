import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#1E2027',
        height: '45rem',
        marginTop: '1rem',
        border: '#EDEDEF solid 0.0625rem',
        borderRadius: '0.625rem',
        paddingTop: '1rem',
    },
    inlineList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '0.5rem',
    },
    icon: {
        color: '#EDEDEF',
    },
    overlined: {
        borderTop: '#EDEDEF solid 0.0625rem',
        marginTop: '200%',
    }
});