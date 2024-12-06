//serviceCategoria.js
const Categoria = require('../models/tabelaCategoria');

// Função para buscar todas as categorias
const getCategorias = async () => {
  return await Categoria.findAll();
};

// Função para criar uma nova categoria
const createCategoria = async ({ nome, slug, use_in_menu }) => {
  return await Categoria.create({ nome, slug, use_in_menu });
};

module.exports = {
  getCategorias,
  createCategoria,
};
