// controllerLogin.js
const Usuario = require('../models/tabelaUsuarios');
const bcrypt = require('bcrypt');

// Função para autenticar um usuário
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha inválida.' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  login,
};
