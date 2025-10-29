const Critica = require("../models/Critica");

require("dotenv").config();
async function listarCriticas(req, res) {
  try {
    const criticas = await Critica.find().populate("manga");
    res.status(200).json(criticas);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao buscar críticas", err: err.message });
  }
}
module.exports = listarCriticas;
