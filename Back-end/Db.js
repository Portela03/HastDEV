const mysql = require("mysql2");
require('dotenv').config();
const pino = require('pino');
const logger = pino();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});


db.getConnection((err, connection) => {
  if (err) {
    logger.error("Erro ao conectar-se ao banco de dados:" + err);
  } else {
    logger.info("Conexão com o banco de dados bem-sucedida");
    connection.release();
  }
});

module.exports = db;
