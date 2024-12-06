//imagensProduto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const ImagemProduto = sequelize.define('ImagemProduto', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Produtos', // Relaciona com a tabela Produtos
      key: 'id',
    },
  },
});

module.exports = ImagemProduto;
