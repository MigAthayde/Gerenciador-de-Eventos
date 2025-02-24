const {Servicos} = require('../Models/servicos.js');

exports.criarServico = async (req, res) => {
    try{
        const novoServico = new Servicos(req.body);
    }
}