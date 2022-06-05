'use strict'
const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http')
const cors = require('cors')

const PORT = process.env.PORT || 8080
app.use(cors())

const server = app.listen(PORT, () => {
  console.log('Server is up')
})

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://g15competitivewordle.azurewebsites.net/'
  }
})
