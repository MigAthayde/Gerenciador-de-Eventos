const mongoose = require('mongoose');
const {servicosSchema} = require('./servicos.js')

const { Schema } = mongoose;

const eventoSchema = new Schema({
    nome: { type: String, required: true },
    local: { type: String, required: true },
    data: { type: Date, required: true },
    orcamento: { type: Number, required: true },
    servicos: [servicosSchema]
}, {timestamps: true});

const Eventos = mongoose.model("Eventos", eventoSchema);

module.exports = Eventos;