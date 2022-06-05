'use strict'
// const { request } = require('express')
const express = require('express')
const app = express()
// const wSocket = require('ws')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const result = require('express-validator')

const PORT = process.env.PORT || 8080

<<<<<<< HEAD
//accepting a new client
wsServer.on("request", request => {
    const connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("open")) //opening the connection
    connection.on("close", () => console.log("close")) //closing the connect
    connection.on("message", message => {
        //set the logic for getting a message from the client
    })
=======
app.use(cors)
const server = app.listen(PORT, () => {
  console.log('server running on port: ', PORT)
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net'
  }
})
/* // set a headless wsServer that prints any new incoming Event
const wsServer = new wSocket.Server({ noServer: true })
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message))
>>>>>>> master
})

// accepting a new client
wsServer.on('request', request => {
  const connection = request.accept(null, request.origin)
  connection.on('open', () => console.log('open'))
  connection.on('close', () => console.log('close'))
  connection.on('message', message => {

  })
}) */
