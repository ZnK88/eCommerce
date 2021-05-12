const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
  email: {
    type: String,
    pattern:
      "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$",
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  adresse_de_livraison: {
    type: String,
  },
  information_de_facturation: {
    type: String,
  },
});

module.exports = Admin = mongoose.model("admin", adminSchema);
