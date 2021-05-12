const express = require("express");
const router = express.Router();
const auth = require("../../utils/auth");
const Users = require("../../models/Users.js");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

// Récupère les données de l'utilisateur
router.use(bodyParser.json());
router.get("/", auth, async (req, res) => {
  try {
    const userInfo = await Users.findById(req.id);
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).send("Serveur HS");
  }
});

// Récupération des données de l'utilisateur
router.get("/:id", async (req, res) => {
  try {
    let UserAll = await User.findById(req.params.id);
    res.status(200).send(UserAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

// Suppression des données de l'utilisateur
async function DeleteUser(req, res) {
  let findId = req.params.id;

  if (findId) {
    Users.findByIdAndDelete({ _id: findId }, function (err) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        return res.status(200).json({
          msg: "Votre compte a été supprimé !",
        });
      }
    });
  }
}

router.delete("/:id", async function (req, res) {
  try {
    await DeleteUser(req, res);
  } catch (error) {
    console.log(error);
  }
});

// Update des données de l'utilisateur
async function updateUser(req, res) {
  let findById = req.params.id;

  const {
    password,
    email,
    nom,
    prenom,
    adresse_de_livraison,
    adresse_de_livraison_2,
    adresse_de_livraison_3,
    information_de_facturation,
  } = req.body;

  const salt = await bcrypt.genSalt(10);
  let pass = await bcrypt.hash(password, salt);

  if (findById) {
    Users.findByIdAndUpdate(
      { _id: findById },
      {
        password: pass,
        email: email,
        nom: nom,
        prenom: prenom,
        adresse_de_livraison,
        adresse_de_livraison_2,
        adresse_de_livraison_3,
        information_de_facturation,
      },

      function (err, result) {
        if (err) {
          console.log(err);
          res.json({ error: err });
        } else {
          res.json(result);
        }
      }
    );
  }
}

router.put("/:id", auth, async (req, res) => {
  try {
    await updateUser(req, res);
    console.log("Vos informations personnelles ont été modifiées");
  } catch (error) {
    console.log(error);
    console.log("Une erreur est survenue");
  }
});

module.exports = router;
