
'use strict'
const database = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
// const req = require('express/lib/request')
const profile = express.Router()

profile.get('/ForgotPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ForgotPassword.html'))
})
profile.get('/ResetPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ResetPassword.html'))
})

profile.post('/api/profile', function (req, res) {
  const currentUsername = req.body.user
  let index = -1
  index = database.RegisteredUsers.findIndex(function (element) {
    return element.username === currentUsername
  })
  if (index === -1) {
    res.redirect('/profile/ForgotPassword')
  } else {
    res.redirect('/profile/ResetPassword')
  }
})
profile.post('/api/profile/reset', function (req, res) {
  const firstPassword = req.body.password1
  const secondPassword = req.body.password2
  const currentUsername = req.body.user
  let index = -1
  index = database.RegisteredUsers.findIndex(function (element) {
    return element.username === currentUsername
  })
  console.log(database.RegisteredUsers[index])
  if (index === -1 || firstPassword !== secondPassword) {
    res.redirect('/profile/ResetPassword')
  } else {
    database.RegisteredUsers[index].password = firstPassword
    console.log(database.RegisteredUsers[index])
    res.redirect('/')
  }
})
profile.post('/api/profile/return', function (req, res) {
  res.redirect('/')
})
module.exports = profile
