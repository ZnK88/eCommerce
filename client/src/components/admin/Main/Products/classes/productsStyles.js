import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        height: '45rem',
        marginTop: '1rem',
        border: '#EDEDEF solid 0.0625rem',
        borderRadius: '0.625rem',
        paddingTop: '1rem',
        overflow: 'auto',
        padding: '0.5rem',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
    },
});
