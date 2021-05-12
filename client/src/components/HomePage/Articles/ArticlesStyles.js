import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        height: 400,
        width: 280,
        margin: '0.5rem',
        backgroundColor: '#EDEDEF',
    },
    media: {
        paddingTop: '56.25%', // 16:9,
        marginTop:'30',
    },
    actionsArea: {
        height: 342,
        '&:hover': {
            textDecoration: 'none',
        }
    },
    wrapper: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    text: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
    },
    overline: {
        borderTop: '0.0625rem solid #EDEDEF',
        marginTop: '1.5rem',
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
    breadcrumbs: {
        marginTop: '1rem',
    },
    NewProduct: {
        position: 'absolute',
        top: 8,
        left: 8,
        color: 'black',
        backgroundColor: '#4dff4d',
        fontFamily: 'Ubuntu',
        fontWeight: "bold",
    },
    PromoProduct: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'black',
        backgroundColor: '#ff4d4d',
        fontFamily: 'Ubuntu',
        fontWeight: "bold",
        borderRadius: '3px'
    },
    PromoPrice: {
        fontFamily: 'Ubuntu',
        fontWeight: "bold",
        float: "right",
        color: 'red',
    }
});