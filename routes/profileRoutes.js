
'use strict'
const database = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const profile = express.Router()

profile.get('/createAccount', function(req, res){
  res.sendFile(path.join(__dirname, '../views', 'profile', 'createAccount.html'))
} )

profile.get('/ForgotPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ForgotPassword.html'))
})

profile.post('/api/profile/createAccount', function (req, res) {
  let validAccount = false;
  const usernameval = req.body.username.toLowerCase(), 
  emailval = req.body.email.toLowerCase(),
  passwordval = req.body.password.toLowerCase()

  const newUser = [
    {
    username: usernameval,
    email: emailval,
    password: passwordval
  }
  ]

  //check if all necessary info has been added
  if (newUser.name !== '' && newUser.email !== '' && newUser.password !== ''){
    validAccount = true
    if (validAccount) {
      database.RegisteredUsers.push(newUser)
      res.redirect('/')
    }
  } else res.redirect('/profile/createAccount')

})

module.exports = profile