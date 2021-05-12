const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/Users.js");
const { check, validationResult } = require("express-validator");
const jwtToken = require("../../utils/jwtGenToken");

router.post(
  "/",
  [
    // Vérification des données reçues.
    check("email", "Indiquez un email valide.").isEmail().not().isEmpty(),
    check("password", "Le mot de passe ne peut être vide.").not().isEmpty(),
  ],

  async (req, res) => {
    let error = validationResult(req);

    if (!error.isEmpty()) {
      // Si des erreurs sont détectées, on les retourne sous forme de JSON/tableau.
      return res.status(400).json({
        error: error.array(),
      });
    }

    const { email, password } = req.body;
    try {
      // Recherche des données de l'utilisateur dans la BDD.
      let user = await User.findOne({
        email,
      });

      if (!user) {
        return res.status(400).json({
          msg: "E-mail incorrect.",
        });
      }

      // Si l'email est correct, comparaison avec son mot de passe dans la BDD.
      let checkMDP = await bcrypt.compare(password, user.password);
      if (checkMDP == false) {
        return res.status(400).json({
          msg: "Mot de passe incorrect.",
        });

      } else {
        return res
          .status(200)
          .json({ token: jwtToken.generateTokenForUser(user) });
      }

    } catch (error) {
      res.status(500).send("Serveur HS.");
    }
    res.send("Ok.");
  }
);

module.exports = router;
