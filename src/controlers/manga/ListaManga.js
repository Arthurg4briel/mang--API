require("dotenv").config();
const Manga = require("../../models/manga");
async function getAllMangas(req, res) {
  try {
    const mangas = await Manga.find();
    res.status(200).json(mangas);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao procurar os mangás", error: error.message });
  }
}
module.exports = getAllMangas;
