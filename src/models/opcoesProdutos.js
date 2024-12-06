//opcoesProdutos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const OpcaoProduto = sequelize.define('OpcaoProduto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = OpcaoProduto;
