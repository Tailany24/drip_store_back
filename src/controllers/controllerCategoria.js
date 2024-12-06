//controllerCategoria.js
const Categoria = require('../models/tabelaCategoria');

// Função para obter todas as categorias
const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para criar uma nova categoria
const createCategoria = async (req, res) => {
  const { nome, slug, use_in_menu } = req.body;

  try {
    const categoria = await Categoria.create({ nome, slug, use_in_menu });
    res.status(201).json(categoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exportando as funções
module.exports = {
  getCategorias,
  createCategoria,
};
