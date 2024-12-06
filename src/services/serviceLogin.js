//serviceLogin.js
const Usuario = require('../models/tabelaUsuarios');
const bcrypt = require('bcrypt');

// Função para autenticar o login do usuário
const login = async (email, senha) => {
  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    throw new Error('Usuário não encontrado.');
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    throw new Error('Senha inválida.');
  }

  return usuario;
};

module.exports = {
  login,
};
