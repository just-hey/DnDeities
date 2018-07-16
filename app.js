const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const processErrorMessage = require('./errorHandling/errors.errorHandling')
const { DeitiesRouter } = require('./routes')
require('dotenv').config()

app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/deities', DeitiesRouter)
 
app.use((req, res) => { 
  const status = 404
  const message = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, req, res, next) => {
  err = processErrorMessage(err)
  const status = err.status || 500
  const message = err.message || 'Internal Error.'
  res.status(status).json({ message })
})

app.listen(port, () => console.log(`On port: ${port}`))

module.exports = app
