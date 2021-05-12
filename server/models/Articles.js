const mongoose = require("mongoose");
const schema = mongoose.Schema;
const moment = require("moment-timezone");
moment.tz(Date.now(), "Europe/Paris");
moment.locale("fr");
const dateFrance = moment().format("YYYY-MM-DD");

const articleSchema = new schema({
  nom: {
    type: String,
    require: true,
  },
  categorie: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  prix: {
    type: Number,
    require: true,
  },
  nombre_en_stock: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
  modele: {
    type: String,
  },
  en_stock: {
    type: Boolean,
    require: true,
  },
  incrementation: {
    type: Number,
    default: 0,
  },
  convertedImg: {
    type: String,
  },
  prix_reduit: {
    type: Number,
    default: 0,
  },
  date_de_creation: {
    type: String,
    default: dateFrance,
  },
  date_de_debut_promotion: {
    type: String,
    default: dateFrance,
  },
  date_de_fin_de_promotion: {
    type: String,
    default: dateFrance,
  },
});

module.exports = Article = mongoose.model("article", articleSchema);