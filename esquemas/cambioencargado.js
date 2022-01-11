const mongoose = require('mongoose')
const { Schema } = mongoose

const CambioEncargadoSchema = new Schema({
  cambioencargado_id: {
    type: Number,
    require: true
  },
  encargado_id: {
    type:   Number,
    require: true
  },
  cambioencargado_estado: {
    type: String,
    require: true
  },
  cambioencargado_fecha: {
    type: Date,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('cambioencargado', CambioEncargadoSchema)