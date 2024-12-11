const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarioRoute');
const produtoRoutes = require('./routes/produtosRoute');

// Middleware para parsear JSON
app.use(express.json());

// Usando as rotas
app.use('/usuarios', usuarioRoutes);
app.use('/produtos', produtoRoutes);

// Inicializando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
