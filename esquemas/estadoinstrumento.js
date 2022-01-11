const mongoose = require('mongoose')
const { Schema } = mongoose

const EstadoInstrumentoSchema = new Schema({
  estadoinstrumento_id: {
    type: Number,
    require: true
  },
  instrumentos_id: {
    type: Number,
    require: true
  },
  mision_id: {
    type: Number,
    require: true
  },
  estadoinstrumentos_usados: {
    type: Number,
    require: true
  },
  estadoinstrumentos_danados: {
    type: Number,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('estadoinstrumento', EstadoInstrumentoSchema)