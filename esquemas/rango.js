const mongoose = require('mongoose')
const { Schema } = mongoose

const RangoSchema = new Schema({
  rango_id: {
    type: Number,
    require: true
  },
  rango_detalle: {
    type: String,
    require: true
  },
  rango_descripcion: {
    type: String,
    require: true
  },
  rango_anionecesario: {
    type: Number,
    require: true
  },
  rango_anterior: {
    type: Number,
    require: true
  },
  rango_pruebas: {
    type: String,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('rango', RangoSchema)