 
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

 
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem-Vindo à Nossa API!" });
});

 
app.use("/users", userRoutes);

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
