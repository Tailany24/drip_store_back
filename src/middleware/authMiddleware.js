const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key'; // Use uma variável de ambiente para a chave secreta

// Middleware para validar o token JWT
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1]; // Formato esperado: Bearer <token>

    if (!token) {
        return res.status(401).json({ error: 'Token inválido ou não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Anexar informações do usuário ao objeto de requisição
        next(); // Passar para o próximo middleware ou controller
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado' });
    }
};

module.exports = authMiddleware;
