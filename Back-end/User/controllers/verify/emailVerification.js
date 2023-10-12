const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../../models/userModel');
const pino = require('pino')();
const generateVerificationCode = require("./emailVerifyGenerate");

// Função para enviar email de verificação
async function sendVerificationEmail(req, res) {
  const { username, email, password, confirmPassword, first_name, last_name } = req.body;

  try {
    // Gere um código de verificação (você pode usar bibliotecas como crypto para isso).
    const verificationCode = generateVerificationCode();
    
    // Salve o código de verificação no banco de dados junto com o e-mail do usuário.
    try {
      const user = await User.findOne({ where: { email } });
      
      if (user) {
        // Atualize o campo verificationCode no registro do usuário encontrado.
        await User.update({ verificationCode }, { where: { email } });

        // Envie o e-mail de verificação.
        const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          }
        });

        await transport.sendMail({
          from: "HASTDEV <HastDev@gmail.com.br>",
          to: email, // Usar o e-mail fornecido na solicitação.
          subject: "Confirmação de email",
          html: `<h1>Seu código de verificação: ${verificationCode}</h1>`
        });

        pino.info("Email de verificação enviado com sucesso!");
        res.status(200).json({ message: "Email de verificação enviado com sucesso." });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (err) {
      console.error('Erro ao atualizar o código de verificação:', err);
      res.status(500).json({ error: 'Erro ao atualizar o código de verificação.' });
    }
  } catch (err) {
    pino.error("Erro ao enviar email de verificação: " + err);
    res.status(500).json({ error: "Erro ao enviar email de verificação." });
  }
}

module.exports = sendVerificationEmail;
