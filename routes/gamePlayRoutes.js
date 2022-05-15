'use strict'

const path = require('path')
const express = require('express')
const gamePlay = express.Router()
const TheWord = require('../database/TemporaltDatabase')

gamePlay.get('/startgame', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'play.html'))
})

gamePlay.get('/won', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'won.html'))
})

gamePlay.post('/api/play', function (req, res) {
  const playerGuess = req.body.guess.toLowerCase()
  const wordOfDay = setWordOfTheDay()[1]
  console.log(playerGuess)
  if (playerGuess === wordOfDay) {
    res.redirect('/play/won')
  } else {
    console.log('lost')
  }
})

function setWordOfTheDay () {
  const word = 'speak'
  TheWord.WordOfTheDay.push(word)
  return TheWord.WordOfTheDay
}
module.exports = gamePlay
