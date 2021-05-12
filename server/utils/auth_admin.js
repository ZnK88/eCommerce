const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const secreteKey = "c59bda8712cf0bdbaac638d497d3f39b";

/**
 * Ajout d'un middleware pour la verification du token ADMIN
 * si l'utilisateur existe ont next() , sinon ont refuse l'accés
 */

module.exports = async function (req, res, next) {
  const token = req.headers.token;

  try {
    const verify = jwt.verify(token, secreteKey);
    idAdmin = verify.userId;
    let result = await Admin.findById({ _id: idAdmin });
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(401).json({
      msg: "Accès refusé",
    });
  }
};
