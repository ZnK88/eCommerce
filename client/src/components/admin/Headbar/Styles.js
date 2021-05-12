import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        marginTop: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        border: '#EDEDEF solid 0.0625rem',
        borderRadius: '0.625rem',
    },
    inlineContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingRight: '1rem',
    },
});