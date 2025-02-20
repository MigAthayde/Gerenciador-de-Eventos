const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Conexão com MongoDB
async function startDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexão com MongoDB estabelecida com sucesso!');
    }
    catch(error){
        console.error('Erro ao conectar com MongoDB:', error);
    }
}

module.exports = startDB;