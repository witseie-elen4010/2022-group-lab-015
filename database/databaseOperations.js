'use strict'
const dataBase = require('../database/databaseConfig')
let operations = {}

operations.ViewUsers = () => {
    dataBase.sql.connect(dataBase.configurations).then(pool =>{
        console.log('Connected to DB')
         return pool.request().query('SELECT * FROM WordleUsers')
      }).then(result => {
         console.log(result)
         dataBase.sql.close()
      }).catch(error => {
         console.log(error.message)     
         dataBase.sql.close()
      })
}

operations.UpdatePassword = (username,password) => {
    dataBase.sql.connect(dataBase.configurations).then(pool =>{
        console.log('Connected to DB')
         return pool.request()
         .input('user',dataBase.sql.NVarChar,username)
         .input('password',dataBase.sql.NVarChar,password)
         .query('UPDATE WordleUsers SET Password =@password WHERE Username =@user')
      }).then(result => {
         console.log(result)
         dataBase.sql.close()
      }).catch(error => {
         console.log(error.message)     
         dataBase.sql.close()
      })
}
//module.exports = operations