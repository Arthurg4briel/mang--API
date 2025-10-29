require("dotenv").config();

const Manga = require("../../models/manga");
async function DeleteManga(req, res) {
  const id = req.params.id;
  const manga = await Manga.findByIdAndDelete(id);
  if (!manga) {
    res.status(422).json({ msg: "Mangá não encontrado" });
    return;
  }
  try {
    await Manga.deleteOne({ _id: id });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro ao deletar o mangá", error: error.message });
  }
}
module.exports = DeleteManga;
