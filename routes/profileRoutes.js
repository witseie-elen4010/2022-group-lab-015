
'use strict'
const dataBase = require('../database/databaseConfig')
const databaseOperation = require('../database/databaseOperations')
const path = require('path')
const express = require('express')
const operations = require('../database/databaseOperations')
const profile = express.Router()

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
profile.post('/api/createAccount', function (req, res) {
  let validAccount = false
  const nameval = req.body.name.toLowerCase()
  const surnameval = req.body.surname.toLowerCase()
  const usernameval = req.body.username.toLowerCase()
  const emailval = req.body.emailAddr.toLowerCase()
  const passwordval = req.body.password

  //check if all necessary info has been added
  if (usernameval !== '' && emailval !== '' && passwordval !== ''){
    validAccount = true
    if (validAccount) {
      databaseOperation.CreateUser(nameval,surnameval,emailval,usernameval,passwordval)
      setTimeout(()=>{
        res.redirect('/')
      },1000)
    }
  } else res.redirect('/profile/createAccount')

})

module.exports = profile

profile.post('/api/profile/reset', function (req, res) {
  const currentUsername = req.body.user
  const firstPassword = req.body.password1
  const secondPassword = req.body.password2

  dataBase.sql.connect(dataBase.configurations).then(pool =>{
    console.log('Connected to DB')
     return pool.request()
     .input('username',dataBase.sql.NVarChar,currentUsername)
     .query('SELECT * FROM WordleUsers WHERE Username = @username')
  }).then(result => {
    setTimeout(()=>{
      if( result.recordset[0] == null){
       res.redirect('/profile/ResetPassword')
   }else {
if(firstPassword === secondPassword){
databaseOperation.UpdatePassword(currentUsername,firstPassword)
res.redirect('/')
}else{
res.redirect('/profile/ResetPassword')
}}
    },1000)
    dataBase.sql.close()
  }).catch(error => {
     console.log(error.message)     
     dataBase.sql.close()
  })
})
profile.post('/api/profile/delete', function (req, res) {
  const Username = req.body.username
  const Password = req.body.userpassword
  operations.DeleteUser(Username,Password)
  setTimeout(()=>{
    res.redirect('/')
  },1000)
})
profile.post('/api/profile/return', function (req, res) {
  res.redirect('/')
})
profile.post('/api/profile/back', function (req, res) {
  res.redirect('../../../homepage')
})
module.exports = profile
