'use strict'
const registeredUsers = require('../database/TemporaltDatabase')
const dataBase = require('../database/databaseConfig')
const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const Account = express.Router()

Account.get('/homepage', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'layouts', 'homepage.html'))
  })

  Account.post('/api/Accounts', function (req, res) {
    const username = req.body.username
    const password = req.body.password
    dataBase.sql.connect(dataBase.configurations).then(pool =>{
      console.log('Connected to DB')
       return pool.request()
       .input('username',dataBase.sql.NVarChar,username)
       .input('password',dataBase.sql.NVarChar,password)
       .query('SELECT * FROM WordleUsers WHERE Username = @username AND Password = @password')
    }).then(result => {
      setTimeout(()=>{
        if( result.recordset[0] == null){
          res.redirect('/')
     }else res.redirect('../homepage')
      },1000)
      dataBase.sql.close()
    }).catch(error => {
       console.log(error.message)     
       dataBase.sql.close()
    })
  })

module.exports = Account