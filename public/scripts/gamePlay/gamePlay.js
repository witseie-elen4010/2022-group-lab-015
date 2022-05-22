'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')
let row = 0
let column = 0

buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  if (valueOfKeyPressed.toUpperCase() === 'ENTER') {
    PlayerPressedEnter()
  } else {
    FillGameBoard(valueOfKeyPressed)
  }
}

function FillGameBoard (userInput) {
  wordElement[row].querySelectorAll('.word')[column].innerText = userInput
  ++column
}

function PlayerPressedEnter () {
  ++row
  column = 0
}
