const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoute');
const categoriaRoutes = require('./routes/categoriaRoute');
const produtosRoutes = require('./routes/produtosRoute');
const loginRoutes = require('./routes/loginRoute');

const app = express();
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/login', loginRoutes);

module.exports = app;
