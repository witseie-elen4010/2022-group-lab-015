'use strict'
const { request } = require('express')
const express = require('express')
const app = express()
const wSocket = require('ws')

//set a headless wsServer that prints any new incoming Event
const wsServer = new wSocket.Server({noServer: true})
wsServer.on('connection', socket => {
    socket.on('message', message => console.log(message))
})

//accepting a new client
wsServer.on("request", request => {
    const connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("open"))
    connection.on("close", () => console.log("close"))
    connection.on("message", message => {

    })
})


