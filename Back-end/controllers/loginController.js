const bcrypt = require("bcrypt");
const db = require("../Db");
const pino = require("pino")();
const jwt = require("jsonwebtoken");

function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ? ", [username], (err, userResult) => {
    if (err) {
      pino.error("Erro ao consultar o banco de dados:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    if (userResult.length > 0) {
      bcrypt.compare(password, userResult[0].password, (err, senhaCorreta) => {
        if (err) {
          pino.error("Erro ao comparar senhas criptografadas:", err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        if (senhaCorreta) {
          pino.info("Usuário logado com sucesso");

          const secret = process.env.SECRET;

          const token = jwt.sign(
            {
              id: userResult[0].id
            },
            secret
          );

          return res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
        } else {
          pino.info("Senha incorreta");
          return res.status(401).json({ error: "Senha incorreta" });
        }
      });
    } else {
      pino.info("Usuário não encontrado");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
  });
}

module.exports = { login };
