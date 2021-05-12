const jwt = require("jsonwebtoken");

const secreteKey = "c59bda8712cf0bdbaac638d497d3f39b";

module.exports = {
  generateTokenForUser: function (userData) {
    return jwt.sign(
      {
        userId: userData._id,
      },
      secreteKey
    ); // Voir pour rajouter un délai d'expiration
  },
  VerifyToken: function (token) {
    jwt.verify(token, secreteKey, function (err, decoded) {
      if (decoded == null) {
        console.log("return false");
        return false;
      } else {
        console.log("return true");
        return true;
      }
    });
  },
};
