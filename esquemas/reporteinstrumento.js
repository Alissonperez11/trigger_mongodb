const mongoose = require('mongoose')
const { Schema } = mongoose

const ReporteInstrumentoSchema = new Schema({
  reporteinstrumento_id: {
    type: Number,
    require: true
  },
  estadoinstrumento_id: {
    type: Number,
    require: true
  },
  reporteinstrumento_fecha: {
    type: Date,
    require: true
  },
  reporteinstrumento_estado: {
    type: String,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('reporteinstrumento', ReporteInstrumentoSchema)