const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

require('dotenv').config();

// Conexão com o front
app.use(express.json());
app.use(cors());

// Rotas públicas
app.use("/", routes);

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
