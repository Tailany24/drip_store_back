// server.js
const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuarioRoute'); // Importando rotas de usuários
const loginRoutes = require('./routes/loginRoute'); // Importando rotas de login
const categoriaRoutes = require('./routes/categoriaRoute'); // Importando rotas de categorias
const produtoRoutes = require('./routes/produtosRoute'); // Importando rotas de produtos

// Middleware para parsear JSON
app.use(express.json());

// Usando as rotas
app.use('/usuario', usuarioRoutes);  // Rota para usuários
app.use('/usuario', loginRoutes);  // Rota para login
app.use('/categoria', categoriaRoutes); // Rotas para categorias
app.use('/produto', produtoRoutes); // Rotas para produtos

// Inicializando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

