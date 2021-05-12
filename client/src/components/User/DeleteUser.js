import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import ReducedHeader from '../Header/ReducedHeader';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const DeleteUser = ({ match }) => {
    
    const history = useHistory();
    const [user, setUser] = useState([]);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleValidate = async () => {

        await Axios.delete(`http://localhost:5000/users/${user._id}`)
        .then(response => {
            setSuccessMsg(response.data.msg);
            localStorage.removeItem("token");
            history.push("/");
        })
        .catch(error => {
            setErrorMsg(error.response.data.msg);
        });
    }


    useEffect(() => {
        
        const getUser = () => {
            let apiURL = `http://localhost:5000/users/${match.params.id}`;
            Axios.get(apiURL)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setErrorMsg(error.response.data.msg);
            })
        }

        getUser();
    }, [match.params.id]);
    
    return (
        <Grid container justify="space-evenly">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReducedHeader />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                { errorMsg && (
                    <Alert severity="error">{errorMsg}</Alert>
                )}
                { successMsg && (
                    <Alert severity="success">{successMsg}</Alert>
                )}
                <Alert severity="warning">
                    <AlertTitle>
                        <Typography variant="h6">
                            Voulez-vous supprimer votre compte ?
                        </Typography>
                    </AlertTitle>
                    <Button size="small" href={`/compte`}>
                        <Typography>
                            Annuler
                        </Typography>
                    </Button>
                    <Button size="small" onClick={handleValidate}>
                        <Typography>
                            Valider
                        </Typography>
                    </Button>
                </Alert>
            </Grid>
        </Grid>
    );
}

export default DeleteUser;