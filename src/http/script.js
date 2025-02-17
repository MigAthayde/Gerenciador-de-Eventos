import express from 'express';
import router from './routes.js'

const app = express();
const PORT = 3030;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})