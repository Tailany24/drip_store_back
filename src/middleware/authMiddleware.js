//authMiddleware.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/tabelaUsuarios');

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key'; 

// Função para gerar o token JWT
const gerarToken = (usuario) => {
  return jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
      name: usuario.name,
    },
    SECRET_KEY,
    { expiresIn: '1h' } // Token válido por 1 hora
  );
};

// Middleware para verificar a autenticação do usuário
const autenticarUsuario = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuarioId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};



// Função de login
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verificar se o usuário existe no banco de dados
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    // Comparar a senha fornecida com o hash armazenado
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    // Gerar o token JWT
    const token = gerarToken(usuario);

    // Retornar o token ao cliente
    return res.status(200).json({ 
      message: 'Login realizado com sucesso!',
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};


module.exports = {
  login,
  autenticarUsuario,
};
