const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

const server = express()
const port = process.env.PORT || 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
  try {
    console.log(`Server rodando na porta ${port}`)
  } catch (error) {
    console.log(`Error: ${error}`) 
  }
})

module.exports = server