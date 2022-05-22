'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')
const row = 1
const letter = 1

buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  FillGameBoard(valueOfKeyPressed)
}

function FillGameBoard () {
  console.log(wordElement)
}
