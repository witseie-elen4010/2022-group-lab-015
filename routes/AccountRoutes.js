'use strict'
const registeredUsers = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const Account = express.Router()

Account.get('/homepage', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'gameplay', 'homepage.html'))
  })

Account.post('/api/Accounts', function (req, res) {
    const Username = req.body.username
    const Password = req.body.password
   const TheUser = registeredUsers.RegisteredUsers[0]
      if(Username === TheUser.username && Password == TheUser.password){
          console.log("hello")
          res.redirect('/account/homepage')
      }
    
  })

module.exports = Account