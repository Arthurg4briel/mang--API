const { Schema, model } = require("mongoose");
const hora = { dataStyle: "Full", timeStyle: "Short" };
const criticaManga = new Schema({
  manga: {
    type: Schema.Types.ObjectId,
    ref: "Manga", // referência ao modelo Manga
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario", // referência ao modelo Usuario (que você também precisa criar)
    required: true,
  },
  nota: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  comentario: {
    type: String,
    required: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
});

const Critica = model("Critica", criticaManga);
module.exports = Critica;
