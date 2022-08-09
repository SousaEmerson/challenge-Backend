const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/books', { useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error)
db.once('open', () => console.log('conected to MongoDB.'))

module.exports = db
