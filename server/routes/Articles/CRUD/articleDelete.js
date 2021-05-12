const express = require("express");
const router = express.Router();
const articleModel = require("../../../models/Articles.js");

async function DeleteArticle(req, res) {
  let findId = req.params.id;

  if (findId) {
    articleModel.findByIdAndDelete({ _id: findId }, function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      } else {
        return res.status(200).json({
          msg: "L'article a été supprimé !",
        });
      }
    });
  }
}

router.delete("/:id", async function (req, res) {
  try {
    await DeleteArticle(req, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
