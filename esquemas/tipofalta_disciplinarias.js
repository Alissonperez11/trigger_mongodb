const mongoose = require('mongoose')
const { Schema } = mongoose

const TipoFaltaDisciplinariaSchema = new Schema({
  falta_disciplinaria: {
    type: Number,
    require: true
  },
  faltadisci_gravedad: {
    type: String,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('tipofaltadisciplinaria', TipoFaltaDisciplinariaSchema)