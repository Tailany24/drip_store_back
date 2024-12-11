//controllerProduto.js
const produtoService = require('../services/serviceProdutos');

const getProdutos = async (req, res) => {
  try {
    const produtos = await produtoService.getAllProdutos();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProdutoById = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await produtoService.getProdutoById(id);
    res.status(200).json(produto);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const createProduto = async (req, res) => {
  const produtoData = req.body;
  try {
    const produto = await produtoService.createProduto(produtoData);
    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduto = async (req, res) => {
  const { id } = req.params;
  const produtoData = req.body;
  try {
    const produto = await produtoService.updateProduto(id, produtoData);
    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await produtoService.deleteProduto(id);
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
