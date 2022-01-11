const mongoose = require('mongoose')
const { Schema } = mongoose

const BatallonSchema = new Schema({
  batallon_id: {
    type: Number,
    require: true
  },
  batallon_numero: {
    type: String,
    require: true
  },
  batallon_alias: {
    type: String,
    require: true
  }
},{
  versionKey: false
})

module.exports = mongoose.model('batallon', BatallonSchema)