const mongoose = require('mongoose');

const CavaleiroSchema = new mongoose.Schema({
      nome: {
        type: String,
        require: true,
      },
      idade: {
        type: Number,
        require: true,
      },
      descricao: {
        type: String,
        require: true,
      },
      foto: {
        type: String,
        require: true,
      },
      habilidade: {
        type: String,
        require: true,
      },
      armadura: {
        type: String,
        require: true,
      },
})

const Cavaleiro = mongoose.model('cavaleiros', CavaleiroSchema)

module.exports = Cavaleiro;