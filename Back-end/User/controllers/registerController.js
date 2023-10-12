const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const pino = require("pino")();
const User = require("../models/userModel"); // Importe o modelo de usuário que você definiu
const { registrationValidationRules } = require("./validations/userValidation");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const saltRounds = 10;

// Função de rota para o registro
function register(req, res) {
  const { username, email, password, confirmPassword, first_name, last_name } =
    req.body;

  // Realiza validações de entrada
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (password !== confirmPassword) {
    // Se a senha e a confirmação de senha não coincidem, retorne um erro
    return res
      .status(400)
      .json({ error: "A senha e a confirmação de senha não coincidem" });
  }

  // Verifica se o nome de usuário já está em uso
  User.findOne({ where: { username: username } })
    .then((existingUser) => {
      if (existingUser) {
        // Nome de usuário já está em uso
        pino.info("Nome de usuário já em uso");
        return res.status(400).json({ error: "Nome de usuário já em uso" });
      } else {
        // Verifica se o email já está em uso
        return User.findOne({ where: { email: email } });
      }
    })
    .then((existingUser) => {
      if (existingUser) {
        // Email já está em uso
        pino.info("Email já em uso");
        return res.status(400).json({ error: "Email já em uso" });
      }

      // Hash da senha para proteger
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          // Erro ao gerar o hash da senha
          pino.error("Erro ao gerar o hash da senha:" + err);
          return res.status(500).json({ error: "Erro Interno do servidor" });
        }

        // Inserir dados no banco de dados usando o modelo de usuário
        User.create({
          username: username,
          password: hash,
          email: email,
          first_name: first_name,
          last_name: last_name,
        })
          .then(() => {
            // Registro bem-sucedido
            pino.info("Cadastrado com sucesso");
            res.status(200).json({ message: "Cadastrado com sucesso" });
          })
          .catch((err) => {
            // Erro ao inserir dados no banco de dados
            pino.error("Erro ao inserir dados no banco de dados:" + err);
            res.status(500).json({ error: "Erro Interno do servidor" });
          });
      });
    })
    .catch((err) => {
      // Erro ao consultar o banco de dados
      pino.error("Erro ao consultar o banco de dados:" + err);
      res.status(500).json({ error: "Erro ao consultar o banco de dados" });
    });

    const token = jwt.sign({ userId: user.id }, process.env.EMAIL_VERIFICATION_SECRET, { expiresIn: '24h' });
    sendVerificationEmail(user.email, token);
}

function sendVerificationEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Confirmação de E-mail",
    html: `<p>Clique no link a seguir para confirmar seu e-mail: <a href="${process.env.BASE_URL}/verify-email/${token}">Confirmar E-mail</a></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("E-mail de verificação enviado: " + info.response);
    }
  });
}

module.exports = { registrationValidationRules, register };
