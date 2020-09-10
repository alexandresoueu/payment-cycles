const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/money-is-cash')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.general.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.general.Number.max = "O '{VALUE}' informado é menor que o limite minimo de '{MAX}'"
mongoose.Error.messages.general.Number.enum = "O '{VALUE}' informado é menor que o limite minimo de '{ENUM}'"