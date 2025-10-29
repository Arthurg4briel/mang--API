require("dotenv").config();
const jwt = require("jsonwebtoken");

async function ChecaToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso Negado" });
  }

  try {
    const secret = process.env.SECRET;
    const decoded = jwt.verify(token, secret); // <- aqui você pega os dados
    req.user = decoded; // <- agora você pode usar req.user nas rotas depois
    next();
  } catch (error) {
    return res.status(400).json({ msg: "Token inválido" });
  }
}

module.exports = ChecaToken;
