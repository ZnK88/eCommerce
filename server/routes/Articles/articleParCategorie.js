const express = require("express");
const router = express.Router();
const articleSchema = require("../../models/Articles.js");
const { check, validationResult } = require("express-validator");

/**
 * Affichage des catégories
 * disponible pour tous
 */

router.get("/", async (req, res) => {
  try {
    var articles = await Article.aggregate([
      { $match: {} },
      { $group: { _id: "$categorie" } },
      { $sort: { _id: 1 } },
    ]);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

/**
 * Affichage de tout articles par catégorie avec la recherche par nom de catégorie
 * disponible pour tous
 */

router.get("/:name", async (req, res) => {
  try {
    let articleAll = await Article.find({ categorie: req.params.name });
    res.status(200).send(articleAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

/**
 * Affichage des articles par catégorie avec limitation
 * dans l'ordre d'incrementation
 * disponible pour tous
 */

router.get("/:categorieName/:nbrLimitation", async (req, res) => {
  try {
    let articleAll = await Article.find({ categorie: req.params.categorieName })
      .sort({
        incrementation: -1,
      })
      .limit(parseInt(req.params.nbrLimitation));
    res.status(200).json(articleAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});
module.exports = router;
