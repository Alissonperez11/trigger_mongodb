const mongoose = require('mongoose')
const { Schema } = mongoose

const PeticionAscensoSchema = new Schema({
  peticionascenso_id: {
    type: Number,
    require: true
  },
  rango_id: {
    type: Number,
    require: true
  },
  soldado_id: {
    type: Number,
    require: true
  },
  peticion_ascenso_fecha: {
    type: Date,
    require: true
  },
  peticion_ascenso_observaciones: {
    type: String,
    require: true
  },
  peticion_ascenso_aprobacion: {
    type: Boolean,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('peticionascenso', PeticionAscensoSchema)