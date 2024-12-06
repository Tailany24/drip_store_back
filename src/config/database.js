const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || // Nome do banco
    process.env.DB_USER || // Usuário do banco
    process.env.DB_PASSWORD ||  // Senha do banco
    {
        host: process.env.DB_HOST || 'Host',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false, // Opcional: Desabilitar logs do Sequelize no console
    }
);

module.exports = sequelize;

