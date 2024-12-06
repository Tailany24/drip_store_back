//usuarioRoute.js
const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/controllerUsuario');

// Rota para obter todos os usuários
router.get('/', controllerUsuario.getUsuarios);

// Rota para criar um novo usuário
router.post('/', controllerUsuario.createUsuario);

// Rota para obter um usuário por ID
router.get('/:id', controllerUsuario.getUsuarioId);

module.exports = router;
