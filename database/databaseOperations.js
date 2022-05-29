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

operations.CreateUser = (name,surname,email,username,password) => {
   dataBase.sql.connect(dataBase.configurations).then(pool =>{
       console.log('Connected to DB')
        return pool.request()
        .input('name',dataBase.sql.NVarChar,name)
        .input('surname',dataBase.sql.NVarChar,surname)
        .input('email',dataBase.sql.NVarChar,email)
        .input('username',dataBase.sql.NVarChar,username)
        .input('password',dataBase.sql.NVarChar,password)
        .query('INSERT INTO WordleUsers VALUES(@name,@surname,@email,@username,@password)')
     }).then(result => {
        console.log(result)
        dataBase.sql.close()
     }).catch(error => {
        console.log(error.message)     
        dataBase.sql.close()
     })
}

operations.DeleteUser = (username,password) => {
   dataBase.sql.connect(dataBase.configurations).then(pool =>{
       console.log('Connected to DB')
        return pool.request()
        .input('user',dataBase.sql.NVarChar,username)
        .input('password',dataBase.sql.NVarChar,password)
        .query('DELETE FROM WordleUsers WHERE Username = @user AND Password =@password')
     }).then(result => {
        console.log(result)
        dataBase.sql.close()
     }).catch(error => {
        console.log(error.message)     
        dataBase.sql.close()
     })
}
module.exports = operations