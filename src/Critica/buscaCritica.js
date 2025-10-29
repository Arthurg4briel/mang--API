require("dotenv").config();
const Critica = require("../models/Critica");
async function buscaCritica(req, res) {
  const { id } = req.params;
  try {
    const critica = await Critica.findById(id).populate("manga");
    if (!critica) {
      return res.status(404).json({ msg: "Crítica não encontrada" });
    }
    res.status(200).json({ critica });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao buscar críticas do mangá", error: error.message });
  }
}
module.exports = buscaCritica;
