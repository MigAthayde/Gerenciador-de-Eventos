const express = require('express');
const router = require('./routes.js');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o express e configurar a porta de escuta 3030
const app = express();
const PORT = process.env.PORT || 3030;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})