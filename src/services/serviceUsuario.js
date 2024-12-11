//serviceUsuario.js
const bcrypt = require('bcrypt');

const createUsuario = async ({ name, email, senha }) => {
  // Verifica se o email já está em uso
  const usuarioExistente = await Usuario.findOne({ where: { email } });
  if (usuarioExistente) {
    throw new Error('Email já está em uso.');
  }

  // Hash da senha
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  return await Usuario.create({ name, email, senha: senhaCriptografada });
};
