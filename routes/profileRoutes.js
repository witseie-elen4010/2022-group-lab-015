'use strict'

const dataBase = require('../database/databaseConfig')
const databaseOperation = require('../database/databaseOperations')
const path = require('path')
const express = require('express')
const operations = require('../database/databaseOperations')
const bcrypt = require('bcrypt')
const profile = express.Router()
const salt = 10

profile.get('/createAccount', function(req, res){
  res.sendFile(path.join(__dirname, '../views', 'profile', 'createAccount.html'))
} )

profile.get('/ForgotPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ResetPassword.html'))
})
profile.get('/ResetPassword', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'ResetPassword.html'))
})

profile.get('/DeleteAccount', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'DeleteAccount.html'))
})

profile.post('/api/createAccount', async function (req, res) {
  let validAccount = false
  const nameval = req.body.name.toLowerCase()
  const surnameval = req.body.surname.toLowerCase()
  const usernameval = req.body.username.toLowerCase()
  const emailval = req.body.emailAddr.toLowerCase()
  const passwordval = req.body.password
  //check if all necessary info has been added
  if (usernameval !== '' && emailval !== '' && passwordval !== '' && nameval !== '' && surnameval !== ''){
    validAccount = true
    if (validAccount) {
      const hashedPassword = await bcrypt.hash(passwordval,salt)
      await databaseOperation.CreateUser(nameval,surnameval,emailval,usernameval,hashedPassword)
      res.redirect('/')
    }
  } else {
    res.redirect('/profile/createAccount')
  }
})

profile.post('/api/profile/reset', async function (req, res) {
  const currentUsername = req.body.user
  const firstPassword = req.body.password1
  const secondPassword = req.body.password2
  const validUser = await databaseOperation.DoesUserExistByUsername(currentUsername)
  if(validUser){

    if(firstPassword === secondPassword){
      await databaseOperation.UpdatePassword(currentUsername,firstPassword)
      res.redirect('/')
      }else{
      res.redirect('/profile/ResetPassword')
      }

  }else{
    res.redirect('/profile/ResetPassword')
  }
})

profile.post('/api/profile/delete', async function (req, res) {
  const Username = req.body.username
  const Password = req.body.userpassword
  const isUserDeleted = await databaseOperation.DeleteUser(Username,Password)
  if(isUserDeleted){
    res.redirect('/')
  }
  else{
    res.redirect('/DeleteAccount')
  }
})

profile.post('/api/profile/return', function (req, res) {
  res.redirect('/')
})

profile.post('/api/profile/back', function (req, res) {
  res.redirect('../../../homepage')
})
module.exports = profile
