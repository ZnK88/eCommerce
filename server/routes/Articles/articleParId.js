const express = require("express");
const router = express.Router();
const articleModel = require("../../models/Articles");

/**
 * Création de la route GET articles/:id qui permet de retourner toutes les informations d'un seul article.
 * Utilisable par tous les utilisateurs.
 */

router.get("/:id", async (req, res) => {
  try {
    let articleAll = await Article.findById(req.params.id);
    res.status(200).send(articleAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

/**
 * Création de la route POST articles/:id/up pour l'incrémentation des articles, ce qui va permettre de trier par articles les plus vus.
 * Utilisable par tous les utilisateurs.
 */

router.post("/:id/up", async (req, res) => {
  try {
    // Modification de la valeurs incrementation et envoie dans le JSON d'articlesNonModifier
    let articleNonModifier = await Article.findById(req.params.id);
    let incrementationValue = articleNonModifier.incrementation + 1;
    articleNonModifier.incrementation = incrementationValue;
    articleModifier = articleNonModifier;

    articleModel.findByIdAndUpdate(
      { _id: req.params.id },
      articleModifier,
      function (err, result) {
        if (err) {
          console.log(err);
          res.json({ error: err });
        } else {
          res.status(200).send(); // Pas de données renvoyées car on effectue une incrémentation silencieuse
        }
      }
    );
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});
module.exports = router;
