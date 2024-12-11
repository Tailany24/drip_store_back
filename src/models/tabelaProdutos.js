//tabelaProdutos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Categoria = require('./tabelaCategoria');
const ImagemProduto = require('./imagensProduto');
const OpcaoProduto = require('./opcoesProdutos');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id',
    },
  },
}, {
  timestamps: false, // Garante que os campos createdAt e updatedAt sejam gerenciados automaticamente
});

// Relacionamento entre Produto e ImagemProduto (1:N)
Produto.hasMany(ImagemProduto, {
  foreignKey: 'produtoId',
  as: 'imagens', // Nome do campo para associações
});
ImagemProduto.belongsTo(Produto, {
  foreignKey: 'produtoId',
  as: 'produto',
});

// Relacionamento entre Produto e OpcaoProduto (1:N)
Produto.hasMany(OpcaoProduto, {
  foreignKey: 'produtoId',
  as: 'opcoes', // Nome do campo para associações
});
OpcaoProduto.belongsTo(Produto, {
  foreignKey: 'produtoId',
  as: 'produto',
});

module.exports = Produto;
