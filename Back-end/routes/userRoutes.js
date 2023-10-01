 
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  userController.inserirUsuario(username, password, email, (error, results) => {
    if (error) {
      console.error("Erro ao inserir usuário:", error);
      res.status(500).send("Erro ao inserir usuário");
    } else {
      console.log("Usuário inserido com sucesso!");
      res.status(200).send("Usuário inserido com sucesso!");
    }
  });
});

// Exporta as rotas para uso no arquivo principal (app.js)
module.exports = router;
