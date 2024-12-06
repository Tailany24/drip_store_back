//serviceUsuario.js
const Usuario = require('../models/tabelaUsuarios');

// Função para obter todos os usuários
const getUsuarios = async () => {
  return await Usuario.findAll();
};

// Função para criar um novo usuário
const createUsuario = async ({ nome, email, senha }) => {
  // Verifica se o email já está em uso
  const usuarioExistente = await Usuario.findOne({ where: { email } });
  if (usuarioExistente) {
    throw new Error('Email já está em uso.');
  }

  // Hash da senha (considerando que a hash é feita no controller ou middleware de autenticação)
  return await Usuario.create({ nome, email, senha });
};

// Função para buscar usuário por ID
const getUsuarioId = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuário não encontrado.');
  }
  return usuario;
};

module.exports = {
  getUsuarios,
  createUsuario,
  getUsuarioId,
};
