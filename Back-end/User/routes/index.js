const express = require("express");

const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Rota de registro
router.post("/register", registerController.registrationValidationRules, registerController.register);

// Rota de login
router.post("/login", loginController.login);

// Rota protegida de usuário
router.get("/user/:id", authController.checkToken, userController.getUserById);

//Rota atualização token
router.post("/refresh-token", authController.checkRefreshToken, (req, res) => {
     const accessToken = authController.createJwt(req.userId);
    res.status(200).json({ accessToken });
  });


module.exports = router;
