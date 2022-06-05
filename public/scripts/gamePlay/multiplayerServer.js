'use strict'
const express = require('express')
const app = express()
const wSocket = require('ws')

//set a headless wsServer that prints any new Event
const wsServer = new ws.Server()
wsServer.on('connection', socket => {
    socket.on('message', message => console.log(message))
})


