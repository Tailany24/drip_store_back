//tabelaUsuarios.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Caminho correto para o arquivo de configuração do banco

const Usuario = sequelize.define('Usuario', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Usuario;
