//controllerCategoria.js
const categoriaService = require('../services/serviceCategoria');

// Função para obter todas as categorias
const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para obter categoria por ID
const getCategoriaById = async (req, res) => {
  const { id } = req.params;

  try {
    const categoria = await categoriaService.getCategoriaById(id);
    res.status(200).json(categoria);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Função para criar uma nova categoria
const createCategoria = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const categoria = await categoriaService.createCategoria(nome, descricao);
    res.status(201).json(categoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para atualizar uma categoria
const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;

  try {
    const categoria = await categoriaService.updateCategoria(id, nome, descricao);
    res.status(200).json({ message: 'Categoria atualizada com sucesso.', categoria });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
};
