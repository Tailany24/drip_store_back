//usuarioRoute.js
const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/controllerUsuario');

// Rota para criar um novo usuário
router.post('/cadastrar', controllerUsuario.createUsuario);

// Rota para obter um usuário por ID
router.get('/:id', controllerUsuario.getUsuarioId);

// Rota para deletar um usuário
router.delete('/delete/:id', controllerUsuario.deleteUsuario);

module.exports = router;

