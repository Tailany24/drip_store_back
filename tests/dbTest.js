const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
  } else {
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
  }
});

connection.end();
