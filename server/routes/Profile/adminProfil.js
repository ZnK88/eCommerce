const express = require("express");
const router = express.Router();
const auth = require("../../utils/auth");
const auth_admin = require("../../utils/auth_admin");
const Admin = require("../../models/Admin.js");
const Users = require("../../models/Users.js");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

// Récupère les données de l'admin
router.use(bodyParser.json());
router.get("/", auth, async (req, res) => {
  try {
    const userInfo = await Admin.findById(req.id);
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).send("Serveur HS");
  }
});

// Récupération des donées de l'admin
router.get("/:id", async (req, res) => {
  try {
    let adminAll = await Admin.findById(req.params.id);
    res.status(200).send(adminAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});

// Suppression des données de l'admin
async function DeleteAdmin(req, res) {
  let findId = req.params.id;

  if (findId) {
    Admin.findByIdAndDelete({ _id: findId }, function (err) {
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
    await DeleteAdmin(req, res);
  } catch (error) {
    console.log(error);
  }
});

// Update des données de l'admin
async function updateAdmin(req, res) {
  let findById = req.params.id;

  const {
    password,
    email,
    nom,
    prenom,
    adresse_de_livraison,
    information_de_facturation,
  } = req.body;

  const salt = await bcrypt.genSalt(10);
  let pass = await bcrypt.hash(password, salt);

  if (findById) {
    Admin.findByIdAndUpdate(
      { _id: findById },
      {
        password: pass,
        email: email,
        nom: nom,
        prenom: prenom,
        adresse_de_livraison,
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
    await updateAdmin(req, res);
    console.log("Vos informations personnelles ont été modifiées !");
  } catch (error) {
    console.log(error);
    console.log("Une erreur est survenue !");
  }
});

/**
 * Ajout de la route GET /admin/membres/list qui permet de récupéré
 * la liste de tout les utilisateur avec leur donnée
 * reservé a l'admin
 */
router.get("/membres/list", auth_admin, async (req, res) => {
  try {
    const userInfo = await Users.find().sort({ nom: -1 }).select("-password");
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).send("Serveur HS");
  }
});

module.exports = router;
