const mongoose = require('mongoose')
const { Schema } = mongoose

const SancionSchema = new Schema({
  sancion_id: {
    type: Number,
    require: true
  },
  soldado_id: {
    type: Number,
    require: true
  },
  falta_disciplinarias_id: {
    type: Number,
    require: true
  },
  sancion_motivo: {
    type: String,
    require: true
  },
  sancion_fechaincidente: {
    type: Date,
    require: true
  },
  sancion_fechainicio: {
    type: Date,
    require: true
  },
  sancion_fechafinal: {
    type: Date,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('sancion', SancionSchema)