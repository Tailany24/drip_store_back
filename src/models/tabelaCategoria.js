//tabelaCategoria.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Categoria;

