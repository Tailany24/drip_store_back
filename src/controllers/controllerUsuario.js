//controllerUsuario.js
const Usuario = require('../models/tabelaUsuarios');

// Função para obter todos os usuários
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar um novo usuário
const createUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Verifica se o email já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Email já está em uso.' });
    }

    // Criação do usuário
    const usuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter um usuário por ID
const getUsuarioId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exportando as funções
module.exports = {
  getUsuarios,
  createUsuario,
  getUsuarioId,
};
