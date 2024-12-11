//serviceLogin.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

const login = async (email, senha) => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    throw new Error('Usuário não encontrado.');
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    throw new Error('Senha inválida.');
  }

  // Gerar um token JWT
  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, name: usuario.name },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  return { usuario, token };
};

module.exports = { login };
