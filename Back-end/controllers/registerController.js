const bcrypt = require("bcrypt");
const db = require("../db");

const saltRounds = 10;

function register(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, usernameResult) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, emailResult) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (usernameResult.length > 0) {
        res.status(400).json({ error: "Nome de usuário já em uso" });
      } else if (emailResult.length > 0) {
        res.status(400).json({ error: "Email já em uso" });
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }

          db.query(
            "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
            [username, hash, email],
            (err, result) => {
              if (err) {
                res.status(500).json({ error: err.message });
                return;
              }
              res.status(200).json({ message: "Cadastrado com sucesso" });
            }
          );
        });
      }
    });
  });
}

module.exports = { register };
