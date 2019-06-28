require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./routes/index')

app.use(bodyParser.json())

app.use('/api/v1', index)

app.get('/', (req, res) => {
  res.send('OK')
})

const port = process.env.PORT

app.listen(port, () => console.log(`server starts on ${port}`))