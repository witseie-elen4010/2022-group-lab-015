'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')
const row = 0
const letter = 0

buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  FillGameBoard(valueOfKeyPressed)
}

function FillGameBoard (userInput) {
  wordElement[row].querySelectorAll('.word')[letter].innerText = userInput
}
