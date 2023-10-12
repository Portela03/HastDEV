const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const pino = require("pino")();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Importe o modelo de usuário que você definiu

function login(req, res) {
  const { username, password } = req.body;

 
  // Buscar o usuário pelo nome de usuário
  User.findOne({ where: { username: username } })
    .then((user) => {
      if (!user) {
        pino.info("Usuário não encontrado");
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      // Comparar a senha fornecida com a senha armazenada no banco de dados
      bcrypt.compare(password, user.password, (err, senhaCorreta) => {
        if (err) {
          pino.error("Erro ao comparar senhas criptografadas:" + err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        if (senhaCorreta) {
          pino.info("Usuário logado com sucesso");

          const secret = process.env.SECRET;

          const token = jwt.sign(
            {
              id: user.id,
            },
            secret
          );

          return res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
        } else {
          pino.info("Senha incorreta");
          return res.status(401).json({ error: "Senha incorreta" });
        }
      });
    })
    .catch((err) => {
      pino.error("Erro ao consultar o banco de dados:" + err);
      res.status(500).json({ error: "Erro interno do servidor" });
    });
}

module.exports = { login };
