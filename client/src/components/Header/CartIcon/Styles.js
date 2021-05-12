import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        backgroundColor: '#1E2027',
        margin: '1rem',
        textAlign: 'center',
    },
    inlineList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        '&:hover' : {
            textDecoration: 'underline',
        }
    }
});