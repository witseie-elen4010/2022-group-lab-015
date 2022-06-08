'use strict'
const registeredUsers = require('../database/TemporaltDatabase')
const databaseOperation = require('../database/databaseOperations')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const bcrypt = require('bcrypt')
const Account = express.Router()

Account.get('/homepage', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layouts', 'homepage.html'))
})

Account.post('/api/Accounts', async function (req, res) {
  const username = req.body.username
  const password = req.body.password
  const userExists = await databaseOperation.DoesUserExistByUsername(username)
  if (userExists) {
    const SecuredPassword = await databaseOperation.GetUserPassword(username)
    const validLogin = await bcrypt.compare(password, SecuredPassword)
    if (validLogin) {
      res.redirect('../homepage')
    } else {
      // Inform the user that either password or username is invalid
      res.redirect('/')
    }
  } else {
    // Inform the user that either password or username is invalid
    res.redirect('/')
  }
})

module.exports = Account
