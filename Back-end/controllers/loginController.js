const bcrypt = require("bcrypt");
const db = require("../db");
const pino = require("pino")();
const jwt = require("jsonwebtoken");

function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ? ", [username], (err, userResult) => {
    if (err) {
      pino.error("Erro ao consultar o banco de dados:", err);
      throw err;
    }
    if (userResult.length > 0) {
      bcrypt.compare(password, userResult[0].password, (err, senhaCorreta) => {
        if (err) {
          pino.error("Erro ao comparar senhas criptogradas:", err);
      throw err;
        }
        if (senhaCorreta) {
          pino.info("Usuário logado com sucesso");
          res.status(200).json({ message: "Usuário logado com sucesso" });
        } else {
          pino.info("Senha incorreta");
          res.status(401).json({ error: "Senha incorreta" });
        }
      });
    } else {
      pino.info("Usuário não encontrado");
      res.status(404).json({ error: "Usuário não encontrado" });
    }

    try{

const secret = process.env.SECRET;

const token = jwt.sign(
  {

 id: userResult[0].id

},
secret,
)

res.status(200).json({msg: "Autenticação realizada com sucesso", token})

    }catch(err){

      pino.error("Erro no Token de verificação:", err);
      throw err;
    }
  });
}

module.exports = { login };
