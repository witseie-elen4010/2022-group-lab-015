'use strict'
const path = require('path')
const express = require('express')

const layoutRoute = express.Router()

// Display the homepage
layoutRoute.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layouts', 'layout.html'))
})

module.exports = layoutRoute