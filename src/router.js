const User = require("./models/User");
const express = require("express");
const registerControler = require("./controlers/auth/register");
const LoginUser = require("./controlers/auth/login");
const ChecaToken = require("./middlewares/authMiddleware");
const nomeManga = require("./controlers/manga/Manga");
const getAllMangas = require("./controlers/manga/ListaManga");
const DeleteManga = require("./controlers/manga/deleteManga");
const listarCriticas = require("./Critica/listarCritic");
const criarCritica = require("./Critica/CriarCritica");
const buscaCritica = require("./Critica/buscaCritica");
const attCritica = require("./Critica/attCritica");
const DeletaCritica = require("./Critica/DeleteCritica");
const router = express.Router();

router.post("/auth/register", registerControler);
router.post("/auth/login", LoginUser);
router.get("/dashboard/:id", ChecaToken, (req, res) => {
  console.log(req.user), res.status(200).json({ msg: "Você está logado" });
});

router.post("/manga", nomeManga);
router.get("/manga/Lista", getAllMangas);
router.delete("/manga/:id", DeleteManga);
router.post("/manga/criarCritica", criarCritica);
router.get("/manga/ListaCriticas", listarCriticas);
router.get("/manga/busca/:id", buscaCritica);
router.put("/manga/attCritica/:id", ChecaToken, attCritica);
router.delete("/manga/DeletaCrit/:id", ChecaToken, DeletaCritica);
module.exports = router;
