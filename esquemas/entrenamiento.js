const mongoose = require('mongoose')
const { Schema } = mongoose

const EntrenamientoSchema = new Schema({
  entrenamiento_id: {
    type: Number,
    require: true
  },
  batallon_id: {
    type: Number,
    require: true
  },
  entrenamiento_fechainicio: {
    type: Date,
    require: true
  },
  entrenamiento_fechafinal: {
    type: Date,
    require: true
  },
  entrenamiento_calificacion: {
    type: String,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('entrenamiento', EntrenamientoSchema)