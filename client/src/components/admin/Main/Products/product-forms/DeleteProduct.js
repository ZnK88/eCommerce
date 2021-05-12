import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';

import { useStyles } from './classes/formStyles.js';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

// import Product from '../Product';

const DeleteArticle = ({ match }) => {
    
    const classes = useStyles();

    const history = useHistory();
    
    const [id, setId] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => { 
        
        const getProduct = async () => {
            let apiURL = `http://localhost:5000/articles/${match.params.id}`;
            
            await Axios.get(apiURL)
            .then(response => {
                setId(response.data._id);
            })
            .catch(error => {
                console.log(error.response);
            });
        }

        getProduct();

    }, [match.params.id]);

    const handleCancel = () => {
        history.goBack();
    }

    const handleValidate = async () => {
        let apiURL = `http://localhost:5000/articles/delete/${match.params.id}`;

        await Axios.delete(apiURL)
        .then(response => {
            setShow(false);
            setSuccessMsg(response.data.msg);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    return (
        <Box className={classes.container}>
            {
                successMsg && ( 
                    <Alert severity="success">
                        <Typography variant="h6">
                            {successMsg}
                        </Typography>
                        <Button href="/admin/articles">
                            <Typography variant="h6" color="secondary">
                                Retour aux articles
                            </Typography>
                        </Button>
                    </Alert>
                )
            }
            {
                show && (
                    <Box>
                        <Alert severity="warning">
                            <Typography variant="h6" color="secondary">
                                Etes-vous sûr de vouloir supprimer l'article {id} ?
                            </Typography>
                        </Alert>
                        <Button onClick={handleValidate}>
                            <Typography variant="body1" color="secondary">
                                Valider
                            </Typography>
                        </Button>
                        <Button onClick={handleCancel}>
                            <Typography variant="body1" color="secondary">
                                Annuler
                            </Typography>
                        </Button>
                    </Box>
                )
            }
        </Box>
    );
}

export default DeleteArticle;