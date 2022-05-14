'use strict'

const express = require('express')
const app = express()

// load body-parser
const bodyParser = require('body-parser')

const layoutRoutes = require('./routes/layoutRoutes')

// Express should use body parser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mount routes
// By default, the program should come here
app.use('/', layoutRoutes)