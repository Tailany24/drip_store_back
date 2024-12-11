//categoriaRoute.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/controllerCategoria');

// Rota para obter todas as categorias
router.get('/lista', categoriaController.getCategorias);

// Rota para obter categoria por ID
router.get('/:id', categoriaController.getCategoriaById);

// Rota para criar uma nova categoria
router.post('/criar', categoriaController.createCategoria);

// Rota para atualizar uma categoria
router.put('/atualizar/:id', categoriaController.updateCategoria);

module.exports = router;

