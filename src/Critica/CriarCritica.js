require("dotenv").config();
const Critica = require("../models/Critica");

async function criarCritica(req, res) {
  const { mangaId, usuario, nota, comentario } = req.body;
  try {
    const novaCritica = await Critica.create({
      manga: mangaId,
      usuario,
      nota,
      comentario,
    });
    res.status(201).json({ novaCritica });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao criar crítica", error: error.message });
  }
}
module.exports = criarCritica;
