const bcrypt = require("bcrypt");
const db = require("../Db");
const pino = require("pino")();

const saltRounds = 10;


function register(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, usernameResult) => {
    if (err) {
      pino.error("Erro ao consultar o banco de dados:", err);
       
    }
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, emailResult) => {
      if (err) {
        pino.error("Erro ao consultar o banco de dados:", err);
      
      }
      if (usernameResult.length > 0) {
        pino.info("Nome de usuário já em uso");
        res.status(400).json({ error: "Nome de usuário já em uso" });
      } else if (emailResult.length > 0) {
        pino.info("Email já em uso");
        res.status(400).json({ error: "Email já em uso" });
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            pino.error("Erro ao gerar o hash da senha:", err);
           
          }

          db.query(
            "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
            [username, hash, email],
            (err, result) => {
              if (err) {
                pino.error("Erro ao inserir dados no banco de dados:", err);
                
              }
              pino.info("Cadastrado com sucesso");
              res.status(200).json({ message: "Cadastrado com sucesso" });
            }
          );
        });
      }
    });
  });
}

module.exports = { register };
