/* const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

 
router.post('/inserir', (req, res) => {
  const username = "Lucasqc04";
  const password = "12345678";
  const email = "lucasqcampos9@gmail.com";

  userController.inserirUsuario(username, password, email, (error, results) => {
    if (error) {
      console.error('Erro ao inserir usuário:', error);
      res.status(500).send('Erro ao inserir usuário');
    } else {
      console.log('Usuário inserido com sucesso!');
      res.status(200).send('Usuário inserido com sucesso!');
    }
  });
});

module.exports = router;
 */