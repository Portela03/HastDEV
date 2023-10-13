const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../../models/userModel');
const VerificationCode = require('../../models/verificationCodeModel');
const pino = require('pino')();
const generateVerificationCode = require("./emailVerifyGenerate")

// Função para enviar email de verificação
async function sendVerificationEmail(req, res) {
  const { email } = req.body;

  try {
    const verificationCode = generateVerificationCode();

    const user = await User.findOne({ where: { email } });

    if (user) {
    
      await VerificationCode.destroy({ where: { userId: user.userid } });

  
      const code = await VerificationCode.create({
        userId: user.userid,
        code: verificationCode,
      });

      
      const transport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transport.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Confirmação de email',
        html: `<h1>Seu código de verificação: ${code.code}</h1>`,
      });

      pino.info('Email de verificação enviado com sucesso!');
      res.status(200).json({ message: 'Email de verificação enviado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (err) {
    console.error('Erro ao enviar email de verificação: ' + err);
    res.status(500).json({ error: 'Erro ao enviar email de verificação.' });
  }
}

module.exports = sendVerificationEmail;
