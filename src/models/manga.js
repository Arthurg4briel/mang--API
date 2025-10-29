const { Schema, model } = require("mongoose");
const mangaSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano_lancamento: { type: Number, required: true },
  //   sinopse: { type: String, required: true },
});

const Manga = model("Manga", mangaSchema);
module.exports = Manga;
