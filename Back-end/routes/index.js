const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");

// Rota de registro
router.post("/register", registerController.register);

// Rota de login
router.post("/login", loginController.login);

module.exports = router;
