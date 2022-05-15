
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

profile.post('/api/profile/update', function (req, res) {
  let currentUsername = req.body.olduser
  let NewUsername = req.body.newuser
  let index = -1
  index = database.RegisteredUsers.findIndex(function (element) {
    return element.username === currentUsername
  })
  if(index === -1) {
    res.redirect('/profile/UpdateUserName')
  } else {
    database.RegisteredUsers[index].username = NewUsername
    res.redirect('/')
    console.log(database.RegisteredUsers[index].username)
  }
})
module.exports = profile