/* 'use strict'
// const { request } = require('express')
const express = require('express')
const app = express()
// const wSocket = require('ws')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const result = require('express-validator')

const PORT = process.env.PORT || 3000

const maxClients = 2
const rooms = {}

app.use(cors)
const server = app.listen(PORT, () => {
  console.log('server running on port: ', PORT)
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net'
  }
}) */
/* // set a headless wsServer that prints any new incoming Event
const wsServer = new wSocket.Server({ noServer: true })
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message))
})

// accepting a new client
wsServer.on('request', request => {
  const connection = request.accept(null, request.origin)
  connection.on('open', () => console.log('open'))
  connection.on('close', () => console.log('close'))
  connection.on('message', message => {

  })
}) */

/* //creating a new room for others to join
function createRoom(p) {
  const room_ = genKey(5) //gens a random letter key thats index to identify the room
  rooms[room_] = [io]
  io["room"] = room_ //assign room code to client
}
function genKey(length) {
  let result = ''
  const characters = 'abcdefghijklmnop123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

//joining a room, but it must exist and max cap must not be reached
function joinRoom(p) {
  const room_ = p.code;
  if (!obj.keys(rooms).includes(room_)) {
      console.warn(`Room ${room_} does not exist`)
      return
  }

  if (rooms[room].length >= maxClients) {
      console.warn(`Room ${room_} is full`)
      return
  }

  rooms[room_].push(io)
  io["room"] = room_

  //generalInformation(wsServer)
}

//leaving a room and closing it when it is empty
function leaveRoom (p) {
  const room_ = io.room_
  rooms[room_] = rooms[room_].filter(so => so !== io)
  io["room"] = undefined

  if (rooms[room_].length === 0) {
      closeRoom(room_)
  }
}

function closeRoom(r) {
  rooms = rooms.filter(key => key !== r)
} */
