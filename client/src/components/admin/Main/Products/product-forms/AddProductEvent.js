import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { useStyles } from '../classes/productsStyles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';

const AddProductEvent = ({ match }) => {
    
    const classes = useStyles();
    const [article, setArticle] = useState([]);
    const [promo, setPromo] = useState('');
    const [calc, setCalc] = useState('');
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:5000/articles/${match.params.id}`)
        .then(response => {
            setArticle(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [match.params.id]);

    const handlePromo = event => {
        setPromo(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        let payload = {
            prix_reduit: promo,
        }
        let token = localStorage.getItem("tokenAdmin");

        Axios.put(`http://localhost:5000/articles/update/${article._id}`, payload, {
            headers: {
                token: token
            }
        })
        .then(response => {
            setSuccessMsg(response.data.msg);
        })
        .catch(error => {
            setErrorMsg(error.response.data.msg);
        });
    }

    const handleCalc = () => {
        let percentage = promo / 100 * article.prix;
        let result = article.prix - percentage;
        let numb = Number(result);
        let roundedCalc = numb.toFixed(2);
        setCalc(roundedCalc);
    }
    
    return successMsg ? (
        <Alert severity="success">{successMsg}</Alert>
    ) : (
        <Paper elevation={4} className={classes.container}>
            <Typography variant="h6" color="secondary">
                Ajouter un événement à l'article {article.nom}
            </Typography>
            <Typography variant="h6" color="secondary">
                    Tarif de base : {article.prix}
            </Typography>
            <Typography variant="h6" color="secondary">
                Avec promotion : {calc}
            </Typography>
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    className={classes.input}
                    placeholder="Ajouter un  pourcentage : 10, 20, 35"
                    fullWidth
                    required
                    value={promo}
                    onChange={(event) => handlePromo(event)}
                />
                <Button fullWidth onClick={handleCalc}>
                    <Typography variant="h6" color="secondary">
                        Calculer
                    </Typography>
                </Button>
                <Button type="submit" fullWidth>
                    <Typography variant="h6" color="secondary">
                        Valider
                    </Typography>
                </Button>
            </form>
        </Paper>
    );
}

export default AddProductEvent;
