const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const saltRounds = 10;

//conexao com o banco
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


//conexao com o front
app.use(express.json());
app.use(cors());

//dados de cadastro
app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, usernameResult) => {
    if (err) {
      res.send(err);
    }
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, emailResult) => {
      if (err) {
        res.send(err);
      }
      if (usernameResult.length > 0) {
        res.send({ msg: "Nome de usuário já em uso" });
      } else if (emailResult.length > 0) {
        res.send({ msg: "Email já em uso" });
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            res.send(err);
          }

          db.query(
            "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
            [username, hash, email],
            (err, result) => {
              if (err) {
                res.send(err);
              }
              res.send({ msg: "Cadastrado com sucesso" });
            }
          );
        });
      }
    });
  });
});



//dados de login, (apenas o username e password)
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ? ", [username], (err, userResult) => {
    if (err) {
      res.send(err);
    }
    if (userResult.length > 0) {
      bcrypt.compare(password, userResult[0].password, (erro, senhaCorreta) => {
        if (senhaCorreta) {
          res.send("Usuário logado com sucesso");
        } else {
          res.send("Senha incorreta");
        }
      });
    } else {
      res.send("Usuário não encontrado");
    }
  });
});





app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
