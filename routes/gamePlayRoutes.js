'use strict'

const path = require('path')
const express = require('express')
const gamePlay = express.Router()

gamePlay.get('/startgame', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'play.html'))
})

module.exports = gamePlay
