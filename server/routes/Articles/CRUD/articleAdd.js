const express = require("express");
const router = express.Router();
const articleSchema = require("../../../models/Articles.js");
const {
  check,
  validationResult
} = require("express-validator");
const jwtToken = require("../../../utils/jwtGenToken");
const auth = require("../../../utils/auth");

router.post(
  "/",
  [
    auth,
    [
      check("nom", "Veuillez indiquer le nom de l'article.").not().isEmpty(),
      check("categorie", "Veuillez indiquer la catégorie.").not().isEmpty(),
      check("description", "Veuillez indiquer la description.").not().isEmpty(),
      check("prix", "Veuillez indiquer le prix.").not().isEmpty(),
      check("en_stock", "Veuillez indiquer le stock.").not().isEmpty(),
    ],
  ],

  async (req, res) => {
    let error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }
    console.log(req.body);
    const {
      nom,
      categorie,
      description,
      prix,
      nombre_en_stock,
      status,
      modele,
      en_stock,
      convertedImg,
      prix_reduit,
    } = req.body;

    try {
      let articles = await Article.findOne({
        nom,
      });

      if (articles) {
        return res.status(400).json({
          msg: "L'article existe déjà.",
        });
      }

      let newarticle = new articleSchema({
        nom,
        categorie,
        description,
        prix,
        nombre_en_stock,
        status,
        modele,
        en_stock,
        convertedImg,
        prix_reduit,
      });
      await newarticle.save();
      return res.status(200).json(newarticle);
    } catch (error) {
      res.status(500).send("Serveur HS");
    }
  }
);

module.exports = router;