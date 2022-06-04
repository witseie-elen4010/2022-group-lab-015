'use strict'
const dataBase = require('../database/databaseConfig')
const operations = {}

operations.ViewUser =  async () => {
  try {
    let instance = await dataBase.pools
    let response = await instance.request().query('SELECT * FROM WordleUsers')
    console.log(response.recordset)
  } catch (error) {
    console.log(error.message)
  }
}

operations.UpdatePassword = async (username, password) => {
  try {
    let instance = await dataBase.pools
    await instance.request()
    .input('user', dataBase.sql.NVarChar, username)
    .input('password', dataBase.sql.NVarChar, password)
    .query('UPDATE WordleUsers SET Password =@password WHERE Username =@user')
    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}

operations.CreateUser = async (name, surname, email, username, password) => {
  try {
    let instance = await dataBase.pools
    await instance.request()
    .input('name', dataBase.sql.NVarChar, name)
    .input('surname', dataBase.sql.NVarChar, surname)
    .input('email', dataBase.sql.NVarChar, email)
    .input('username', dataBase.sql.NVarChar, username)
    .input('password', dataBase.sql.NVarChar, password)
    .query('INSERT INTO WordleUsers VALUES(@name,@surname,@email,@username,@password)')
    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}

operations.DeleteUser = (username, password) => {
  dataBase.sql.connect(dataBase.configurations).then(pool => {
    console.log('Connected to DB')
    return pool.request()
      .input('user', dataBase.sql.NVarChar, username)
      .input('password', dataBase.sql.NVarChar, password)
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
