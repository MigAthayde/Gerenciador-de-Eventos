const mongoose = require('mongoose');

// Conexão com MongoDB

async function startDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/');
        console.log('Conexão com MongoDB estabelecida com sucesso!');
    }
    catch(error){
        console.error('Erro ao conectar com MongoDB:', error);
    }
}

module.exports = startDB;