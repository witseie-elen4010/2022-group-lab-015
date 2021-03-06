'use strict'

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const result = require('express-validator')
const app2 = express()
const server = require('http').createServer(app)
// load body-parser
const bodyParser = require('body-parser')

const layoutRoutes = require('./routes/layoutRoutes')
const profileRoutes = require('./routes/profileRoutes')
const gamePlayRoutes = require('./routes/gamePlayRoutes')
const AccountRoutes = require('./routes/AccountRoutes')

// Express should use body parser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mount routes
// By default, the program should come here
app.use('/', layoutRoutes)
app.use('/profile', profileRoutes)
app.use('/play', gamePlayRoutes)
app.use('/account', AccountRoutes)

// Going to serve static files
app.use('/cdn', express.static('public'))

// Set port to work on Azure as well
const port = process.env.PORT || 3000
// const PORT = process.env.PORT || 1337

// app.listen(3000)
// console.log('Express server running on port: ', port)

// app.use(cors)
server.listen(port, () => {
  console.log('server running on port: ', port)
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net' // port
  }
})

io.on('connection', (socket) => {
  console.log('connected!', socket.id)
  socket.on('join_room', (data) => {
    const roomUsers = io.sockets.adapter.rooms.get(data.room)
    const numberOfClients = typeof roomUsers !== 'undefined' ? roomUsers.size : 0
    console.log(`There are: ${numberOfClients} + clients`)
    if (numberOfClients === 0) {
      socket.join(data.room)
    } else if (numberOfClients === 1) {
      socket.join(data.room)
      // start game if there are two player in room
      io.to(data.room).emit('gameStart', { status: 'start' })
    } else {
      io.to(socket.id).emit('RoomCapacity', { message: 'Room Full!' })
    }
  })
  socket.on('BoardUpdate', (event) => {
    // console.log('I need to update opponet..')
    socket.broadcast.emit('OpponentBoard', event)
  })
  socket.on('on_win', (event) => {
    socket.broadcast.emit('opponent_win', event)
  })
})
