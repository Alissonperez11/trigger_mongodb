const mongoose = require('mongoose')
const { Schema } = mongoose

const EncargadoSchema = new Schema({
  encargado_id: {
    type: Number,
    require: true
  },
  batallon_id: {
    type: Number,
    require: true
  },
  soldado_id: {
    type: Number,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('encargado', EncargadoSchema)