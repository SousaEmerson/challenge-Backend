const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String },
  phones: [
    {
      number: { type: String },
      ddd: { type: String }
    }
  ]
})

DataSchema.pre('save', function (next) {
  //antes de salvar codigo criptografa
  if (!this.isModified('password')) {
    return next()
  }
  this.password = bcrypt.hashsync(this.password, 10)
  next()
})

module.exports = mongoose.model('user', DataSchema)
