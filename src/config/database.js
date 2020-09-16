const mongoose = require('mongoose')
mongoose.Promise = global.Promise //mongoose promisse api deprecated
module.exports = mongoose.connect('mongodb://localhost/todo')
