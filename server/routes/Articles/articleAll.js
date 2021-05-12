const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let articleAll = await Article.find();
    res.status(200).send(articleAll);
  } catch (error) {
    res.status(500).send("Serveur HS");
  }
});
module.exports = router;
