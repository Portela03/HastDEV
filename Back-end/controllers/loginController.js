const bcrypt = require("bcrypt");
const db = require("../db");

function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ? ", [username], (err, userResult) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (userResult.length > 0) {
      bcrypt.compare(password, userResult[0].password, (err, senhaCorreta) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        if (senhaCorreta) {
          res.status(200).json({ message: "Usuário logado com sucesso" });
        } else {
          res.status(401).json({ error: "Senha incorreta" });
        }
      });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  });
}

module.exports = { login };
