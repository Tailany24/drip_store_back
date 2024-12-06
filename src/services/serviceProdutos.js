//serviceProdutos.js
const Produto = require('../models/tabelaProdutos');

// Função para buscar todos os produtos
const getProdutos = async () => {
  return await Produto.findAll();
};

// Função para criar um novo produto
const createProduto = async ({ name, slug, price, price_with_discount, description, stock, enabled }) => {
  return await Produto.create({
    name,
    slug,
    price,
    price_with_discount,
    description,
    stock,
    enabled,
  });
};

module.exports = {
  getProdutos,
  createProduto,
};
