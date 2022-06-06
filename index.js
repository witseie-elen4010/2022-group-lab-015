'use strict'

const express = require('express')
const app = express()

// load body-parser
const bodyParser = require('body-parser')

const layoutRoutes = require('./routes/layoutRoutes')
const profileRoutes = require('./routes/profileRoutes')
const gamePlayRoutes = require('./routes/gamePlayRoutes')
const AccountRoutes = require('./routes/AccountRoutes')

// Express should use body parser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mount routes
// By default, the program should come here
app.use('/', layoutRoutes)
app.use('/profile', profileRoutes)
app.use('/play', gamePlayRoutes)
app.use('/account', AccountRoutes)

// Going to serve static files
app.use('/cdn', express.static('public'))

// Set port to work on Azure as well
const port = process.env.PORT || 3000
app.listen(port)

console.log('Express server running on port: ', port)
//module.exports = app