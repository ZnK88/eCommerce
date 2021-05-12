import React, { useState } from "react";

import Axios from "axios";
import { Convert } from "mongo-image-converter";

import { useStyles } from './classes/formStyles.js';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Alert } from '@material-ui/lab';

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [nbInStock, setNbInStock] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [image, setImage] = useState("");

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
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleStock = (event) => {
    if (event.target.checked) setStock(true);
    else setStock(false);
  };

  const handleNbInStock = (event) => {
    setNbInStock(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  }

  const emptyForm = () => {
    setName("");
    setModel("");
    setCategory("");
    setDescription("");
    setPrice("");
    setStock("");
    setNbInStock("");
    setImage("");
  };

  let apiURL = "http://localhost:5000/articles/add";

  
  const submitHandler = async (event) => {
      event.preventDefault();
      
      if (
          name.length !== 0 &&
          category.length !== 0 &&
          description.length !== 0 &&
          price !== 0
          ) {
              let token = localStorage.getItem("tokenAdmin");
              const convertedImage = await Convert(image)
              let payload = {
                nom: name,
                modele: model,
                categorie: category,
                description: description,
                prix: price,
                en_stock: stock,
                nombre_en_stock: nbInStock,
                convertedImg: convertedImage,
              };
      if (convertedImage) {
        await Axios.post(apiURL, payload, {
          headers: { 
            token: token 
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setSuccessMsg("L'article a été ajouté !");
            emptyForm();
          }
        })
        .catch((error) => {
          setErrorMsg(error.response.data.msg);
        });
      }
    }
  };

  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.container}>
      <Typography variant="h5" color="secondary">
        Ajouter un produit
      </Typography>
      {successMsg && (
        <Alert severity="success" onClose={() => setSuccessMsg(null)}>{successMsg}</Alert>
      )}
      {errorMsg && (
        <Alert severity="error" onClose={() => setErrorMsg(null)}>{errorMsg}</Alert>
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Nom du produit"
          fullWidth
          required
          value={name}
          onChange={(event) => handleName(event)}
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Modèle du produit"
          fullWidth
          value={model}
          onChange={(event) => handleModel(event)}
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Catégorie du produit"
          fullWidth
          required
          value={category}
          onChange={(event) => handleCategory(event)}
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Description du produit"
          fullWidth
          required
          value={description}
          onChange={(event) => handleDescription(event)}
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Prix en euro du produit"
          type="number"
          fullWidth
          required
          value={price}
          onChange={(event) => handlePrice(event)}
        />
        <FormControlLabel
          className={classes.checkbox}
          control={
            <Checkbox
              name="En stock"
              value={stock}
              onClick={(event) => handleStock(event)}
            />
          }
          label="En Stock"
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Nombre de produits en stock"
          fullWidth
          type="number"
          value={nbInStock}
          onChange={(event) => handleNbInStock(event)}
        />
        <Typography variant="body1" color="secondary" className={classes.image}>
          Ajouter une photo
        </Typography>
          <input type="file" onChange={handleImage} className={classes.file} />
        <Button className={classes.button} fullWidth type="submit">
          <Typography variant="h6" color="secondary">
            Ajouter ce produit
          </Typography>
        </Button>
      </form>
    </Paper>
  );
};

export default AddProductForm;
