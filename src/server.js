//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
//execução
const app = express();
//Models
const User = require("./models/User");
// const user = require("./models/User");
const router = require("./router");
//config json
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Tudo Certo!" });
});

//credencials
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Banco de dados conectado");
    app.listen(PORT || 3000, () => {
      console.log("API rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
