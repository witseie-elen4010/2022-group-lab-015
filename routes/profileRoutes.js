
'use strict'
const database = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const profile = express.Router()

profile.get('/ForgotPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ForgotPassword.html'))
})

profile.get('/UpdateUserName', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'UpdateUsername.html'))
})
module.exports = profile