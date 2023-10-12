const pino = require('pino');
const logger = pino();
const { Sequelize } = require('sequelize');
require('dotenv').config();  
// Agora você pode acessar as variáveis de ambiente definidas no arquivo .env
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

 db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = db;
