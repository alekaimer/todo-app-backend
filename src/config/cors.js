module.exports = function (requisition, response, next) { ;//next serve para usar com o padrão chains of responsability
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
  response.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Acccept')
  next()
}