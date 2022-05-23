'use strict'
const path = require('path')
const express = require('express')

const layoutRoute = express.Router()

// Display the Login homepage
layoutRoute.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layouts', 'layout.html'))
})

layoutRoute.get('/homepage', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layouts', 'homepage.html'))
})

module.exports = layoutRoute