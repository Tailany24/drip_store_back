//categoriaRoute.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/controllerCategoria');

// Rota para obter todas as categorias
router.get('/', categoriaController.getCategorias);

// Rota para criar uma nova categoria
router.post('/', categoriaController.createCategoria);

module.exports = router;
