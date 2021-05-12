const jwt = require("jsonwebtoken");

const secreteKey = "c59bda8712cf0bdbaac638d497d3f39b";

module.exports = function (req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            msg: "Accès refusé",
        });
    }

    try {
        const verify = jwt.verify(token, secreteKey);
        req.id = verify.userId;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Accès refusé",
        });
    }
};
