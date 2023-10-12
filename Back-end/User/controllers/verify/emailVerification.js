const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../../models/userModel');
const pino = require('pino')();
const generateVerificationCode = require("./emailVerifyGenerate")

// Função para enviar email de verificação
async function sendVerificationEmail(req, res) {
  try {
    // Gere um código de verificação (você pode usar bibliotecas como crypto para isso).
    const verificationCode = generateVerificationCode();
    
    // Salve o código de verificação no banco de dados junto com o e-mail do usuário.
    const { email } = req.body;
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
  } catch (err) {
    pino.error("Erro ao enviar email de verificação: " + err);
    res.status(500).json({ error: "Erro ao enviar email de verificação." });
  }
}



module.exports = sendVerificationEmail;
