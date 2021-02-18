module.exports = function(req, res, next) {
  res.header('Acess-Control-Allow-Origin', '*')
  res.header('Acess-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH')
  res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}