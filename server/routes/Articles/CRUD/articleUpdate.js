const express = require("express");
const router = express.Router();
const articleModel = require("../../../models/Articles.js");
const jwtToken = require("../../../utils/jwtGenToken");
const auth = require("../../../utils/auth");

async function updateArticle(req, res) {
  let findId = req.params.id; // Récupère l'id et le met en variable.

  if (findId) {
    articleModel.findByIdAndUpdate(
      { _id: findId },
      req.body,

      function (err, result) {
        // Le callback gère l'erreur ou le résultat.
        if (err) {
          console.log(err);
          res.json({ error: err });
        } else {
          res.json(req.body);
        }
      }
    );
  }
}

router.put("/:id", async function (req, res) {
  try {
    await updateArticle(req, res);
    console.log("Vos modifications ont été prises en compte !");
  } catch (error) {
    console.log(error);
    console.log("Une erreur est survenue !");
  }
});

module.exports = router;
