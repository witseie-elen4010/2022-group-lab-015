'use strict'

const path = require('path')
const express = require('express')
const gamePlay = express.Router()
const TheWord = require('../database/TemporaltDatabase')

gamePlay.get('/startgame', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'play.html'))
})

gamePlay.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'dashboard.html'))
})

gamePlay.get('/multiplayer', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'multiplayer.html'))
})

gamePlay.get('/instructions', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'GameInstructions.html'))
})

gamePlay.get('/won', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'won.html'))
})

gamePlay.get('/tryAgain', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'gameplay', 'tryAgain.html'))
})

gamePlay.post('/api/play', function (req, res) {
  const playerGuess = req.body.guess.toLowerCase()
  const wordOfDay = setWordOfTheDay()[1]
  if (playerGuess === wordOfDay) {
    res.redirect('/play/won')
  } else {
    res.redirect('/play/tryAgain')
  }
})

function setWordOfTheDay () {
  const word = 'speak'
  TheWord.WordOfTheDay.push(word)
  return TheWord.WordOfTheDay
}
module.exports = gamePlay
