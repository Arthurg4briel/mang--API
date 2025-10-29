require("dotenv").config();
const Manga = require("../../models/manga");
async function nomeManga(req, res) {
  const { titulo, autor, ano_lancamento } = req.body || {};
  if (!titulo || !autor || !ano_lancamento) {
    return res
      .status(400)
      .json({ msg: "Preencha todos os campos obrigatórios" });
  }

  try {
    const novoManga = new Manga({
      titulo,
      autor,
      ano_lancamento,
    });
    await novoManga.save();
    res
      .status(201)
      .json({ msg: "Mangá cadastrado com sucesso", manga: novoManga });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao cadastrar o mangá", error: message });
    console.log(error);
  }
}
module.exports = nomeManga;
