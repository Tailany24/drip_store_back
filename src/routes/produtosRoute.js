//produtosRoute.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/controllerProduto');

// Rota para obter todos os produtos
router.get('/', produtoController.getProdutos);

// Rota para criar um novo produto
router.post('/', produtoController.createProduto);

module.exports = router;
