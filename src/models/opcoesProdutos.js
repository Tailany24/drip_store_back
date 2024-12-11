//opcoesProdutos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

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
},
{
  timestamps: false, // Adiciona automaticamente createdAt e updatedAt
});

module.exports = OpcaoProduto;

