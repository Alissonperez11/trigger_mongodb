const mongoose = require('mongoose')
const { Schema } = mongoose

const SoldadoSchema = new Schema({
  soldado_id: {
    type: Number,
    require: true
  },
  rango_id: {
    type: Number,
    require: true
  },
  batallon_id: {
    type: Number,
    require: true
  },
  soldado_cedula: {
    type: String,
    require: true
  },
  soldado_nombre: {
    type: String,
    require: true
  },
  soldado_apellido: {
    type: String,
    require: true
  },
  soldado_fechanacimiento: {
    type: Date,
    require: true
  },
  soldado_fechaenlistacion: {
    type: Date,
    require: true
  },
  soldado_tatuaje: {
    type: Boolean,
    require: true
  },
  soldado_aceptacion: {
    type: Boolean,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('soldado', SoldadoSchema)