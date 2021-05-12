var cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(cors());
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB_URL_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
app.use(
    bodyParser.json({
        limit: "16mb",
        extended: true,
    })
);
app.use(
    bodyParser.urlencoded({
        limit: "16mb",
        extended: true,
    })
);

const db = mongoose.connection;
var jsonParser = bodyParser.json();

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
    console.log("Connecté à la BDD");
});

/** ========== Routage ==========
 *  POST /register : Enregistrement d'un utilisateur.
 *  POST /login  : Connexion d'un utilisateur.
 *  POST /login/admin : Connexion d'un admin.
 *  POST /articles/add : Ajout d'article(s).
 *
 *  PUT /articles/update : Mise à jour d'article(s).
 *  DELETE /articles/delete : Suppression d'article(s).
 *  POST /articles/{id}/up : Incrémentation d'article(s).
 *
 *  GET /articles : Récupération des articles complets.
 *  GET /articles/categories : Récupération de la liste des catégories.
 *  GET /articles/{id} : Récupération d'un article suivant l'id indiqué.
 *
 */
app.use("/register", jsonParser, require("./routes/Register/register"));
app.use("/login", jsonParser, require("./routes/Login/loginUser"));
app.use("/login/admin", jsonParser, require("./routes/Login/loginAdmin"));
app.use("/articles/add", jsonParser, require("./routes/Articles/CRUD/articleAdd"));
app.use("/articles/update", jsonParser, require("./routes/Articles/CRUD/articleUpdate"));
app.use("/articles", jsonParser, require("./routes/Articles/articleAll"));
app.use("/articles/delete", jsonParser, require("./routes/Articles/CRUD/articleDelete"));
app.use("/articles/categories", jsonParser, require("./routes/Articles/articleParCategorie"));
app.use("/articles/", jsonParser, require("./routes/Articles/articleParId"));
app.use("/", jsonParser, require("./routes/Articles/articleParNom"));
app.use("/categories/", jsonParser, require("./routes/Articles/articleParCategorie"));

app.use("/filtres", jsonParser, require("./routes/Articles/filtresArticles"));
app.use("/panier", require("./routes/panier"));
app.use("/admin", jsonParser, require("./routes/Profile/adminProfil"));
app.use("/users", jsonParser, require("./routes/Profile/usersProfil"));
app.use("/commande", jsonParser, require("./routes/numero_commande"));

app.listen(5000);
