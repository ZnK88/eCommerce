const express = require("express");
const router = express.Router();
const articleSchema = require("../../models/Articles.js");
const { check, validationResult } = require("express-validator");

/**
 * Creation de la route GET articles/search/:name qui permet
 * d'obtenir une liste d'articles suivant le :name indiqué
 * Disponible pour tous les utilisateurs
 */

router.get("/search/:name", async (req, res) => {
  try {
    var regex = new RegExp(req.params["name"], "i");

    let articleList = await Article.find({ nom: regex });
    res.status(200).json(articleList);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

router.get("/search", async (req, res) => {
  try {
    let articleList = await Article.find();
    res.status(200).json(articleList);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

/**
 * Creation de la route GET articles/search/
 * qui permet d'éviter un bug 500 si la recherche est vide
 * Disponible pour tous les utilisateurs
 */

router.get("/search", async (req, res) => {
  try {
    let articleList = await Article.find();
    res.status(200).json(articleList);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

module.exports = router;
