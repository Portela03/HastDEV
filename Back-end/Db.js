const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


db.getConnection((err, connection) => {
  if (err) {
    pino.error("Erro ao conectar-se ao banco de dados:", err);
  } else {
    pino.info("Conexão com o banco de dados bem-sucedida");
    connection.release();
  }
});

module.exports = db;
