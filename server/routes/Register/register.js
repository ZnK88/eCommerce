const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userSchema = require("../../models/Users.js");
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  [
    check("email", "Indiquez un e-mail valide.").isEmail(),
    check(
      "password",
      "Indiquez un mot de passe supérieur ou égal à 6 caractères."
    ).isLength({
      min: 6,
    }),
    check(
      "confirmPassword",
      "Indiquez un mot de passe supérieur ou égal à 6 caractères."
    ).isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    let error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }

    // Si on passe la vérification, on commmence à effectuer les requêtes vers la BDD.
    const { email, password, confirmPassword } = req.body;
    try {
      let user = await User.findOne({
        email,
      });

      if (user) {
        return res.status(400).json({
          msg: "L'utilisateur existe déjà.",
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          msg: "Les mots de passe ne correspondent pas.",
        });
      }

      // Si on passe les deux dernières vérifications, on crée l'utilisateur en respectant le schema indiqué.
      let newUtilisateur = new userSchema({
        email,
        password,
      });

      // Génération du mot de passe hashé.
      const salt = await bcrypt.genSalt(10);
      newUtilisateur.password = await bcrypt.hash(password, salt);

      // On envoie les données.
      await newUtilisateur.save();
      return res.status(200).json(newUtilisateur);

    } catch (error) {
      res.status(500).send("Serveur HS.");
    }
  }
);

module.exports = router;
