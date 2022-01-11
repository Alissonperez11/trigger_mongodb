const mongoose = require('mongoose')
const { Schema } = mongoose

const MisionSchema = new Schema({
  mision_id: {
    type: Number,
    require: true
  },
  batallon_id: {
    type: Number,
    require: true
  },
  mision_nombre: {
    type: String,
    require: true
  },
  mision_descripcion: {
    type: String,
    require: true
  },
  mision_fechainicio: {
    type: Date,
    require: true
  },
  mision_fechafinal: {
    type: Date,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('mision', MisionSchema)