 
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

function inserirUsuario(username, password, email, callback) {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      callback(err);
    }

    userModel.query(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, hash, email],
      callback
    );
  });
}

// Exporta a função para uso em routes/userRoutes.js
module.exports = {
  inserirUsuario,
};
