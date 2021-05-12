const express = require("express");
const Articles = require("../../models/Articles");
const router = express.Router();

router.get("/prix-asc", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      prix: 1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

router.get("/prix-desc", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      prix: -1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

router.get("/A-Z", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      nom: 1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

router.get("/Z-A", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      nom: -1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

router.get("/categorie-A-Z", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      categorie: 1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(articles);
    console.log("Serveur HS");
  }
});

router.get("/categorie-Z-A", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      categorie: -1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(articles);
    console.log("Serveur HS");
  }
});

router.get("/populaires", async (req, res) => {
  try {
    let articles = await Articles.find({})
      .sort({ incrementation: -1 })
      .limit(5);
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

router.get("/rabais", async (req, res) => {
  try {
    let articles = await Articles.find({}).sort({
      prix_reduit: 1
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send("Serveur HS");
    console.log(error);
  }
});

module.exports = router;