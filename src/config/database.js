const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'sql10750052', // Nome do banco
    process.env.DB_USER || 'sql10750052',      // Usuário do banco
    process.env.DB_PASSWORD || '7sBa8DHMv2', // Senha do banco
    {
        host: process.env.DB_HOST || 'sql10.freesqldatabase.com',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false, // Opcional: Desabilitar logs do Sequelize no console
    }
);

module.exports = sequelize;


