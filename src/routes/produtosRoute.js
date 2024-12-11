const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/controllerProduto');

// Rotas para produtos
router.get('/lista', produtoController.getProdutos);
router.get('/:id', produtoController.getProdutoById);
router.post('/criar', produtoController.createProduto);
router.put('/atualizar/:id', produtoController.updateProduto);
router.delete('/excluir/:id', produtoController.deleteProduto);

module.exports = router;
