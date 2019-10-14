const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello world')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})
