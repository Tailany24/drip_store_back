//loginRoute.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/controllerLogin');

// Rota para autenticação de login
router.post('/login', loginController.login);

module.exports = router;
