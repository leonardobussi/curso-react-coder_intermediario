const server = require('./config/server')
require('./config/database')
const rout = require('./config/routes')(server)