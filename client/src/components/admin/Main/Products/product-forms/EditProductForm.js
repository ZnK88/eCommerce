import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';
import { Convert } from "mongo-image-converter";

import { useStyles } from './classes/formStyles.js';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Alert } from '@material-ui/lab';


const EditProductForm = ({ match }) => {
    
    const classes = useStyles();

    const history = useHistory();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [nbInStock, setNbInStock] = useState("");
    const [newStock, setNewStock] = useState("");
    const [image, setImage] = useState("")

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => { 
        let apiURL = `http://localhost:5000/articles/${match.params.id}`;
        
        Axios.get(apiURL)
        .then(response => {
            setId(response.data._id);
            setName(response.data.nom);
            setModel(response.data.model);
            setCategory(response.data.categorie);
            setDesc(response.data.description);
            setPrice(response.data.prix);
            setImage(response.data.convertedImg);
            if (response.data.en_stock === true) {
                setStock("Oui");
            }
            else setStock("Non");
            setNbInStock(response.data.nombre_en_stock)
        })
        .catch(error => {
            console.log(error.response);
        });
    }, [match.params.id]);

    const handleName = (event) => {
        setName(event.target.value);
    };
    
    const handleModel = (event) => {
        setModel(event.target.value);
    };
    
    const handleCategory = (event) => {
        setCategory(event.target.value);
    };
    
    const handleDescription = (event) => {
        setDesc(event.target.value);
    };
    
    const handlePrice = (event) => {
        setPrice(event.target.value);
    };
    
    const handleStock = (event) => {
        if (event.target.checked) setNewStock(true);
        else setNewStock(false);
    };
    
    const handleNbInStock = (event) => {
        setNbInStock(event.target.value);
    };

    const handleImage = (event) => {
        setImage(event.target.files[0]);
    }

    const submitHandler = async event => {
        event.preventDefault();

        let apiURL = `http://localhost:5000/articles/update/${id}`;
        const convertedImage = await Convert(image);
        let payload = {
            nom: name,
            modele: model,
            categorie: category,
            description: desc,
            prix: price,
            en_stock: newStock,
            nombre_en_stock: nbInStock,
            convertedImg: convertedImage
        }
        let token = localStorage.getItem("tokenAdmin");
        await Axios.put(apiURL, payload, {
            headers: {
                token: token
            }
        })
        .then(response => {
            setSuccessMsg("L'article a été modifié !");
            history.push(`/admin/articles/${id}`)
        })
        .catch(error => {
            setErrorMsg(error.response.data.msg);
        })

    };
    
    return (
        <Paper elevation={4} className={classes.containerFlow}>
            <Typography variant="h6" color="secondary">
                Modifier l'article {name}
            </Typography>
            <Typography variant="body1" color="secondary">
                Référence {id}
            </Typography>
            { successMsg && (
                <Alert severity="success" onClose={() => setSuccessMsg(null)}>{successMsg}</Alert>
            )}
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )}
            <form className={classes.form} onSubmit={submitHandler}>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Nom actuel :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder="Nouveau nom du produit"
                            fullWidth
                            required
                            value={name}
                            onChange={(event) => handleName(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Modèle actuel du produit :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder="Nouveau modèle du produit"
                            fullWidth
                            value={model || ""}
                            onChange={(event) => handleModel(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Catégorie actuelle du produit :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder={"Nouvelle catégorie du produit"}
                            fullWidth
                            required
                            value={category}
                            onChange={(event) => handleCategory(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Description actuelle du produit :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder="Nouvelle description du produit"
                            fullWidth
                            required
                            value={desc}
                            onChange={(event) => handleDescription(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Prix actuel du produit :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder="Nouveau prix en euro du produit"
                            type="number"
                            fullWidth
                            required
                            value={price}
                            onChange={(event) => handlePrice(event)}
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Actuellement en stock : {stock}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    name="En stock"
                                    value={newStock}
                                    onClick={(event) => handleStock(event)}
                                />
                            }
                            label="En Stock"
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="body1" color="secondary">
                            Nombre de produits actuellement en stock :
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            placeholder="Nouveau nombre de produits en stock"
                            fullWidth
                            type="number"
                            value={nbInStock}
                            onChange={(event) => handleNbInStock(event)}
                        />
                    </ListItem>
                </List>
                <Typography variant="body1" color="secondary" className={classes.image}>
                    Ajouter une photo
                </Typography>
                <input type="file" onChange={handleImage} required className={classes.file} />
                <Button className={classes.button} fullWidth type="submit">
                    <Typography variant="body1" color="secondary">
                        Modifier cet article
                    </Typography>
                </Button>
            </form>
        </Paper>
    );
}

export default EditProductForm;