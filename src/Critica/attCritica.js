require("dotenv").config();
const Critica = require("../models/Critica");
async function attCritica(req, res) {
  try {
    const critica = await Critica.findById(req.params.id);
    if (!critica) {
      return res.status(404).json({ msg: "Crítica não encontrada" });
    }
    // verificação do usuário sob a critica
    if (critica.usuario.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Acesso negado: Não é o autor" });
    }
    //Att da critica
    const { nota, comentario } = req.body;
    if (nota !== undefined) critica.nota = nota;
    if (comentario !== undefined) critica.comentario = comentario;
    await critica.save();
    res.json({ msg: "Crítica atualizada com sucesso", critica });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao atualizar crítica", error: error.message });
  }
}
module.exports = attCritica;
