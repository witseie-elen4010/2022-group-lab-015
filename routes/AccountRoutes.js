'use strict'
const registeredUsers = require('../database/TemporaltDatabase')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const Account = express.Router()

Account.get('/homepage', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'layouts', 'homepage.html'))
  })

Account.post('/api/Accounts', function (req, res) {
    const Username = req.body.username
    const Password = req.body.password

   registeredUsers.RegisteredUsers.forEach((element, index)=>{
      if(Username === element.username && Password === element.password){
       res.redirect('../homepage')}
     })
    
  })
 
module.exports = Account