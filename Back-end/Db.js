const mysql = require("mysql2");
require('dotenv').config();
const pino = require('pino');
const logger = pino();

const Sequelize = require('sequelize');
const db = new Sequelize('users', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Certifique-se de que a conexão com o banco de dados esteja funcionando corretamente
db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });


module.exports = db;
