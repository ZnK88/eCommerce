const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subschema = new schema({
  id: String,
  nom: String,
  prix: Number,
});

const commandeSchema = new schema({
  user_id: {
    type: String,
  },
  nom: {
    type: String,
    require: true,
  },
  prenom: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  adresse_de_livraison: {
    type: String,
  },
  information_de_facturation: {
    type: String,
  },
  articles: [subschema],
});

module.exports = Commande = mongoose.model("commande", commandeSchema);