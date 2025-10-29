require("dotenv").config();
const user = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const { checkout } = require("../../router");
async function LoginUser(req, res) {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({ msg: "email obrigatório" });
  }
  if (!password) {
    return res.status(422).json({ msg: "senha obrigatória" });
  }
  const User = await user.findOne({ email: email });
  if (!User) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  const CheckPassword = await bcrypt.compare(password, User.password);
  if (!CheckPassword) {
    return res.status(422).json({ msg: "Senhas incorreta" });
  }
  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: User._id,
      },
      secret,
      { expiresIn: "1d" }
    );
    res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
  } catch (error) {
    res.status(500).json({ msg: "Houve um erro no servidor" });
  }
}
module.exports = LoginUser;
