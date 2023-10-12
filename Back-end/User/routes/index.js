const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const emailVerificationController = require("../controllers/emailVerificationController");

//Rota Publica
router.get("/", (req, res) => {
  res.status(200).json({ message: "API conectada com sucesso!" });
});

// Rota de registro
router.post(
  "/register",
  registerController.registrationValidationRules,
  registerController.register
);

// Rota de verificação de e-mail
router.get("/verify-email/:token", emailVerificationController.verifyEmail);

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
