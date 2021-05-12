import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

import { useStyles } from './Styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


const OrderPayment = () => {
    
    const classes = useStyles();

    const [user, setUser] = useState([]);
    const [items, setItems] = useState();

    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [card, setCard] = useState(false);
    const [paypal, setPaypal] = useState(false);

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [CVC, setCVC] = useState("");
    const [email, setEmail] = useState("");

    // const [orderId, setOrderId] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        const getuserInfo = () => {
            let token = localStorage.getItem('token');
            setItems(JSON.parse(localStorage.getItem('Cart')));
            Axios.get(`http://localhost:5000/users`, {
                headers: {
                    token: token
                }
            }).then(response => {
                setSuccessMsg(true);
                setUser(response.data);
                if (response.data.information_de_facturation === 'cb') {
                    setCard(true);
                }
                else if (response.data.information_de_facturation === 'paypal') {
                    setPaypal(true);
                }
            })
            .catch(error => {
                setErrorMsg(error.response.data.msg);
            })
        }
        
        getuserInfo();
    }, []);
    
    const handleCardNumber = event => {
        setCardNumber(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleExpiryDate = event => {
        setExpiryDate(event.target.value);
    }

    const handleCVC = event => {
        setCVC(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        let payload = {
            user_id: user._id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            articles: items,
        }

        Axios.post("http://localhost:5000/commande", payload)
        .then(response => {
            setSuccessMsg("Votre paiement a été réalisé avec succès");
            let orderId = response.data._id
            localStorage.removeItem("Cart");
            history.push(`/commande/${orderId}`);
        })
        .catch(error => {
            setErrorMsg(error.response.data.msg);
        });
    }

    return (
        <Box>
            { successMsg && (
                <Card className={classes.card}>
                        <form onSubmit={handleSubmit}>
                        { card && (
                            <CardContent className={classes.background}>
                                <Typography variant="h6" color="secondary">
                                    Entrer vos informations :
                                </Typography>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="Numéro de carte"
                                    InputProps={{
                                        inputProps: {
                                            min: 16, max: 16
                                        }
                                    }}
                                    fullWidth
                                    required
                                    value={cardNumber}
                                    onChange={(event) => handleCardNumber(event)}
                                />
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="Nom sur la carte"
                                    fullWidth
                                    required
                                    value={name}
                                    onChange={(event) => handleName(event)}
                                />
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="Date d'expiration (ex: 0220 pour février 2020)"
                                    InputProps={{
                                        inputProps: {
                                            min: 4, max: 4
                                        }
                                    }}
                                    fullWidth
                                    required
                                    value={expiryDate}
                                    onChange={(event) => handleExpiryDate(event)}
                                />
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    placeholder="CCV (code de trois chiffres au dos de la carte"
                                    InputProps={{
                                        inputProps: {
                                            min: 3, max: 3
                                        }
                                    }}
                                    fullWidth
                                    required
                                    value={CVC}
                                    onChange={(event) => handleCVC(event)}
                                />
                                <Button type="submit">
                                    <Typography variant="body1" color="secondary">
                                        Valider le paiement
                                    </Typography>
                                </Button>
                            </CardContent>
                        )}
                        { paypal && (
                            <CardContent>
                                <TextField
                                    type="email"
                                    variant="outlined"
                                    placeholder="Adresse e-mail du compte paypal"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={(event) => handleEmail(event)}
                                    />
                                <Button type="submit">
                                    <Typography variant="body1" color="secondary">
                                        Valider le paiement
                                    </Typography>
                                </Button>
                            </CardContent>
                        )}
                    </form>
                </Card>
            )}
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
        </Box>
    );
}

export default OrderPayment;