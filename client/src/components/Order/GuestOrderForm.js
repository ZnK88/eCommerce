import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';


const GuestOrderForm = () => {
    
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [items, setItems] = useState();

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [CVC, setCVC] = useState("");

    const [paypalEmail, setPaypalEmail] = useState("");

    const history = useHistory();

    const handleName = event => {
        setName(event.target.value);
    }

    const handleFirstName = event => {
        setFirstName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleAddress = event => {
        setAddress(event.target.value);
    }
    
    const handleCardNumber = event => {
        setCardNumber(event.target.value);
    }

    const handleCardName = event => {
        setCardName(event.target.value);
    }

    const handleExpiryDate = event => {
        setExpiryDate(event.target.value);
    }

    const handleCVC = event => {
        setCVC(event.target.value);
    }

    const handlePaypalEmail = event => {
        setPaypalEmail(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if ( (!cardName && !cardNumber && !CVC && !expiryDate && paypalEmail) || (cardNumber && cardName && CVC && expiryDate && !paypalEmail)) {
            let payload = {
                user_id: '',
                nom: name,
                prenom: firstName,
                email: email,
                articles: items,
            }

            setItems(JSON.parse(localStorage.getItem('Cart')));
    
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
    }
    
    return (
        <Box>
            <Typography variant="h6" color="primary">
                Compléter vos informations
            </Typography>
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
            { successMsg && (
                <Alert severity="success">{successMsg}</Alert>
            )}
            <form onSubmit={handleSubmit}>
                <List>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Votre nom :
                        </Typography>
                    </ListItemText>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            value={name}
                            placeholder="Votre nom"
                            onChange={handleName}
                            type="text"
                            required
                            fullWidth
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Votre prénom :
                        </Typography>
                    </ListItemText>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            value={firstName}
                            placeholder="Votre prénom"
                            onChange={handleFirstName}
                            type="text"
                            required
                            fullWidth
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Votre adresse mail :
                        </Typography>
                    </ListItemText>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            value={email}
                            placeholder="Votre adresse mail"
                            onChange={handleEmail}
                            type="email"
                            required
                            fullWidth
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItemText>
                        <Typography variant="body1" color="primary">
                            Votre adresse de livraison :
                        </Typography>
                    </ListItemText>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            value={address}
                            placeholder="Votre adresse de livraison"
                            onChange={handleAddress}
                            type="text"
                            required
                            fullWidth
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItemText>
                        <Typography variant="h6" color="primary">
                            Carte bancaire
                        </Typography>
                    </ListItemText>
                    <ListItem>
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
                            value={cardNumber}
                            onChange={(event) => handleCardNumber(event)}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            placeholder="Nom sur la carte"
                            fullWidth
                            value={cardName}
                            onChange={(event) => handleCardName(event)}
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
                            value={CVC}
                            onChange={(event) => handleCVC(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItemText>
                        <Typography variant="h6" color="primary">
                            Paypal
                        </Typography>
                    </ListItemText>
                    <ListItem>
                        <TextField
                            type="email"
                            variant="outlined"
                            placeholder="Adresse e-mail du compte paypal"
                            fullWidth
                            value={paypalEmail}
                            onChange={(event) => handlePaypalEmail(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Button type="submit">
                            <Typography variant="h6" color="primary">
                                Valider vos informations
                            </Typography>
                        </Button>
                    </ListItem>
                </List>
            </form>
        </Box>
    );
}

export default GuestOrderForm;