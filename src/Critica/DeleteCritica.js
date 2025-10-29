require("dotenv").config();
const Critica = require("../models/Critica");
const jwt = require("jsonwebtoken");
async function DeletaCritica(req, res) {
  try {
    const critica = await Critica.findById(req.params.id);
    if (!critica) {
      return res.status(404).json({ msg: "Crítica não encontrada" });
    }
    if (critica.usuario.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ msg: "Acesso negado. Não é o autor da crítica" });
    }
    await Critica.findByIdAndDelete(req.params.id);
    res.json({ msg: "Crítica deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao deletar critica" });
  }
}
module.exports = DeletaCritica;
