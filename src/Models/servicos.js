const mongoose = require('mongoose');

const { Schema } = mongoose;

const servicosSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String,
})

const Servicos = mongoose.model("Servicos", servicosSchema);    

module.exports = {Servicos, servicosSchema};  // Exportando o modelo Servicos para ser usado em outros lugares.  
//  "Servicos" é o nome da collection no MongoDB.  
//  "servicosSchema" é a estrutura do documento que será armazenado.  
