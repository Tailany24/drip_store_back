//controllerUsuario.js
const Usuario = require('../models/tabelaUsuarios');
const bcrypt = require('bcrypt');


// Função para criar um novo usuário
const createUsuario = async (req, res) => {
  try {
    const { name, email, senha } = req.body;

    // Verifica se o email já está em uso
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Email já está em uso.' });
    }

    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar o usuário
    const usuario = await Usuario.create({
      name,
      email,
      senha: senhaCriptografada,
    });

    // Remove a senha do objeto antes de retornar
    const { senha: _, ...usuarioSemSenha } = usuario.toJSON();

    res.status(201).json({ message: 'Usuário criado com sucesso', usuario: usuarioSemSenha });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário: ' + err.message });
  }
};

// Função para obter um usuário por ID
const getUsuarioId = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica se o usuário logado é o mesmo que está sendo solicitado
    if (req.usuarioId !== parseInt(id)) {
      return res.status(403).json({ error: 'Acesso negado.' });
    }

    const usuario = await Usuario.findByPk(id, {
      attributes: { exclude: ['senha'] }, // Exclui a senha do retorno
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário: ' + err.message });
  }
};

//Deleta o cadastro pelo ID

const deleteUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    await usuario.destroy();

    return res.status(200).json({ message: 'Usuário excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao excluir o usuário.' });
  }
};


module.exports = {
  createUsuario,
  getUsuarioId,
  deleteUsuario,
};
