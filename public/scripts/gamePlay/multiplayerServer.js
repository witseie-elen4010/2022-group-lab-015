'use strict'
const http = require('http')
const WebsocketServer = require('websocket').server
const httpServer = http.createServer()

const PORT = process.env.PORT || 8080
httpServer.listen(PORT, console.log('Listening on port: ', PORT))

const wsServer = new WebsocketServer({
  httpServer: httpServer
})

wsServer.on('request', request => {
  //  Accept any kind of request
  // Client trying to connect
  const connection = request.accept(null, request.origin)
  connection.on('open', () => console.log('opened'))
  // Listen to events that happen in that connection
})
// app.use(cors())

/* const server = app.listen(PORT, () => {
  console.log('Server is up')
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net/'
  }
}) */
