const express = require('express')
const toTimestampJson = require('./toTimestampJson')
const app = express()

app.set('view engine', 'pug')

app.use('/assets', express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  const { protocol, hostname } = request
  response.render('index', { host: `${protocol}://${hostname}` })
})

app.get('/api/timestamp', (request, response) => {
  response.json(toTimestampJson())
})

app.get('/api/timestamp/:dateString', (request, response) => {
  const { dateString } = request.params
  response.json(toTimestampJson(dateString))
})

module.exports = app
