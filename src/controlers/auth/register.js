const user = require("../../models/User");
const bcrypt = require("bcrypt");

async function registerControler(req, res) {
  const teste = { user: {} };
  const { name, password, email } = req.body;
  //validations of users
  if (!name) {
    return res.status(422).json({ msg: "um nome é necessário" });
  }
  if (!password) {
    return res.status(422).json({ msg: "uma senha é necessária" });
  }
  if (!email) {
    return res.status(422).json({ msg: "um email é necessário" });
  }
  //check existence of user
  const UserExist = await user.findOne({ email: email });
  if (UserExist) {
    res.status(422).json({ msg: "Use outro email" });
  }

  try {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new user({
      name,
      email,
      password: passwordHash,
    });
    await newUser.save();
    res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error.message);
    res.status(500).json({ msg: "Houve um erro no servidor" });
  }
}

module.exports = registerControler;
