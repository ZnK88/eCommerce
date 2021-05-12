const express = require("express");
const router = express.Router();

/**
 * Ajout de la route POST /total qui permet d'effectuer le total
 * des articles par ID indiqué en POST
 * TODO : Voir pour ajouter les options (couleurs, GB, ect...)
 */

router.post("/", async (req, res) => {
  try {
    let total = 0;
    let quantity = 0;

    for await (let element of req.body) {
      let articleInfo = await Article.findById(element._id);
      total = total + articleInfo.prix;
      quantity = quantity + 1;
    }
    res.json({ total: total, quantity: quantity });

  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

module.exports = router;
