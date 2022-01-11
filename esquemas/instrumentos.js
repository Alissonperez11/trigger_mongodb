const mongoose = require('mongoose')
const { Schema } = mongoose

const InstrumentoSchema = new Schema({
  instrumentos_id: {
    type: Number,
    require: true
  },
  mision_id: {
    type: Number,
    require: true
  },
  instrumentos_nombre: {
    type: String,
    require: true
  },
  instrumentos_cantidad: {
    type: Number,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('instrumento', InstrumentoSchema)