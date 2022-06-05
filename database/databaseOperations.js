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

operations.UserLogs = async (userName, guess, date , time) => {
  try {
    let instance = await dataBase.pools
    await instance.request()
    .input('userName', dataBase.sql.NVarChar, userName)
    .input('guess', dataBase.sql.NVarChar, guess)
    .input('date', dataBase.sql.NVarChar, date)
    .input('time', dataBase.sql.NVarChar, time)
    .query('INSERT INTO logsInformation VALUES(@userName,@guess,@date,@time)')
    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}


operations.DeleteUser = async (username, password) => {
  try {
    let instance = await dataBase.pools
    await instance.request()
    .input('user', dataBase.sql.NVarChar, username)
    .input('password', dataBase.sql.NVarChar, password)
    .query('DELETE FROM WordleUsers WHERE Username = @user AND Password =@password')
    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}

operations.DoesUserExistByUsername = async (username) =>{
  try {
    let instance = await dataBase.pools
    let response = await instance.request()
    .input('user', dataBase.sql.NVarChar, username)
    .query('SELECT COUNT(1) FROM WordleUsers WHERE Username = @user')
    const count = response.recordset[0]['']
    if(count === 1) {
      return true
    }
    else{
      return false 
    } 
  } catch (error) {
    console.log(error.message)
    return false
  }
}

operations.Aunthentication = async (username,password) =>{
  try {
    let instance = await dataBase.pools
    let response = await instance.request()
    .input('user', dataBase.sql.NVarChar, username)
    .input('password', dataBase.sql.NVarChar, password)
    .query('SELECT COUNT(1) FROM WordleUsers WHERE Username = @user AND Password = @password')
    const count = response.recordset[0]['']
    if(count === 1) {
      return true
    }
    else{
      return false 
    } 
  } catch (error) {
    console.log(error.message)
    return false
  }
}

operations.GetUserPassword = async (username) => {
  try {
    let instance = await dataBase.pools
    let response = await instance.request()
    .input('user', dataBase.sql.NVarChar, username)
    .query('SELECT Password FROM WordleUsers WHERE Username = @user')
    return response.recordset[0].Password
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = operations
