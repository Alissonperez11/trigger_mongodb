const mongoose = require('mongoose')
const { Schema } = mongoose

const CastigoSchema = new Schema({
  castigo_id: {
    type: Number,
    require: true
  },
  batallon_id: {
    type: Number,
    require: true
  },
  castigo_fechainicio: {
    type: Date,
    require: true
  },
  castigo_fechafinal: {
    type: Date,
    require: true
  },
  castigo_estado: {
    type: Boolean,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('castigo', CastigoSchema)