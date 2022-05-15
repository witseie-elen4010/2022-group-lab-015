
'use strict'
const database = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const profile = express.Router()

profile.get('/ForgotPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ForgotPassword.html'))
})
profile.get('/ResetPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ResetPassword.html'))
})

 
profile.get('/UpdateUserName', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'UpdateUsername.html'))
})

profile.post('/api/profile/update', function (req, res) {
  let currentUsername = req.body.olduser
  let NewUsername = req.body.newuser

profile.post('/api/profile', function (req, res) {
  let currentUsername = req.body.user

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

    res.redirect('/profile/ForgotPassword')
  } else {
    res.redirect('/profile/ResetPassword')
  }
})
profile.post('/api/profile/reset', function (req, res) {
  let firstPassword = req.body.password1
  let secondPassword = req.body.password2
  let currentUsername = req.body.user
  let index = -1
  index = database.RegisteredUsers.findIndex(function (element) {
    return element.username === currentUsername
  })
  console.log(database.RegisteredUsers[index])
  if(index === -1 || firstPassword !== secondPassword) {
    res.redirect('/profile/ResetPassword')
  } else {
    database.RegisteredUsers[index].password = firstPassword
    console.log(database.RegisteredUsers[index])
    res.redirect("/")
  }
})
profile.post('/api/profile/return', function (req, res) {
  res.redirect("/")
})

module.exports = profile