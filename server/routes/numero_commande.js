const express = require("express");
const router = express.Router();
const Commande = require("../models/Commande.js");

router.post("/", async (req, res) => {
  const {
    user_id,
    nom,
    prenom,
    email,
    adresse_de_livraison,
    information_de_facturation,
    articles,
  } = req.body;

  try {
    let commande = new Commande({
      user_id,
      nom,
      prenom,
      email,
      adresse_de_livraison,
      information_de_facturation,
      articles,
    });

    await commande.save();
    return res.status(200).json(commande);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server HS");
  }
});

router.get("/", async (req, res) => {
  try {
    let commandeAll = await Commande.find();
    res.status(200).send(commandeAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

router.get("/:id", async (req, res) => {
  try {
    let commande_id = await Commande.findById(req.params.id);
    res.status(200).send(commande_id);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

router.get("/userid/:user_id", async (req, res) => {
  try {
    let id_user = await Commande.find({ user_id: req.params.user_id });
    res.status(200).send(id_user);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

module.exports = router;
