'use strict'
const http = require('http')
const WebsocketServer = require('websocket').server
const httpServer = http.createServer()
const clients = {}
const PORT = process.env.PORT || 8080
httpServer.listen(PORT, console.log('Listening on port: ', PORT))

const wsServer = new WebsocketServer({
  httpServer: httpServer
})

wsServer.on('request', request => {
  //  Accept any kind of request
  // Client trying to connect
  // Listen to events that happen in that connection
  const connection = request.accept(null, request.origin)
  connection.on('open', () => console.log('opened'))
  connection.on('open', () => console.log('opened'))

  // If client send a message to the server
  connection.on('message', message => {

  })

  // generate a new clientId
  const clientId = guid()
  // mapping between a connection and a client ID
  clients[clientId] = {
    connection: connection
  }
})

// guid, generate new hash function for user that created a room
const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`
}
// app.use(cors())

/* const server = app.listen(PORT, () => {
  console.log('Server is up')
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net/'
  }
}) */
