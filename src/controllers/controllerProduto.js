//controllerProduto.js
const Produto = require('../models/tabelaProdutos');

// Função para obter todos os produtos
const getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar um novo produto
const createProduto = async (req, res) => {
  const { name, slug, price, price_with_discount, description, stock, enabled } = req.body;

  try {
    const produto = await Produto.create({
      name,
      slug,
      price,
      price_with_discount,
      description,
      stock,
      enabled,
    });
    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exportando as funções
module.exports = {
  getProdutos,
  createProduto,
};
