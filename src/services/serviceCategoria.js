//serviceCategoria.js
const Categoria = require('../models/tabelaCategoria');

// Função para obter todas as categorias
const getAllCategorias = async () => {
  try {
    return await Categoria.findAll();
  } catch (err) {
    throw new Error('Erro ao buscar categorias: ' + err.message);
  }
};

// Função para obter categoria por ID
const getCategoriaById = async (id) => {
  try {
    const categoria = await Categoria.findOne({ where: { id } });
    if (!categoria) {
      throw new Error('Categoria não encontrada.');
    }
    return categoria;
  } catch (err) {
    throw new Error('Erro ao buscar categoria por ID: ' + err.message);
  }
};

// Função para criar uma nova categoria
const createCategoria = async (nome, descricao) => {
  try {
    const categoria = await Categoria.create({ nome, descricao });
    return categoria;
  } catch (err) {
    throw new Error('Erro ao criar categoria: ' + err.message);
  }
};

// Função para atualizar uma categoria
const updateCategoria = async (id, nome, descricao) => {
  try {
    const categoria = await Categoria.findOne({ where: { id } });
    if (!categoria) {
      throw new Error('Categoria não encontrada.');
    }

    categoria.nome = nome || categoria.nome;
    categoria.descricao = descricao || categoria.descricao;

    await categoria.save();
    return categoria;
  } catch (err) {
    throw new Error('Erro ao atualizar categoria: ' + err.message);
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
};
