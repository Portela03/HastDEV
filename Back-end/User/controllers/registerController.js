const bcrypt = require("bcrypt");
const db = require("../../Db");
const pino = require("pino")();
const { validationResult } = require('express-validator');
const { registrationValidationRules } = require('./validations/userValidation');

const saltRounds = 10;

function register(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

// Função de rota para o registro
function register(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Verificar se o username e o email já estão em uso
  db.query("SELECT * FROM users WHERE username = ? OR email = ?", [username, email], (err, result) => {
    if (err) {
      pino.error("Erro ao consultar o banco de dados:" + err);
      return res.status(500).json({ error: "Erro ao consultar o banco de dados" });
    }

    if (result.length > 0) {
      if (result[0].username === username) {
        pino.info("Nome de usuário já em uso");
        return res.status(400).json({ error: "Nome de usuário já em uso" });
      } else if (result[0].email === email) {
        pino.info("Email já em uso");
        return res.status(400).json({ error: "Email já em uso" });
      }
    }

    // Hash da senha
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        pino.error("Erro ao gerar o hash da senha:" + err);
        return res.status(500).json({ error: "Erro Interno do servidor" });
      }

      // Inserir dados no banco de dados
      db.query(
        "INSERT INTO users (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)",
        [username, hash, email, first_name, last_name],
        (err, result) => {
          if (err) {
            pino.error("Erro ao inserir dados no banco de dados:" + err);
            return res.status(500).json({ error: "Erro Interno do servidor" });
          }
          pino.info("Cadastrado com sucesso");
          res.status(200).json({ message: "Cadastrado com sucesso" });
        }
      );
    });
  });
}

module.exports = { registrationValidationRules, register };
