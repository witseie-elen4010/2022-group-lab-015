'use strict'
const buttonElement = document.querySelectorAll('button')
buttonElement.forEach((element) => {
  element.addEventListener('click', keyIsPressed(element.attributes['data-key'].value))
})

function keyIsPressed (valueOfKeyPressed) {
  console.log(valueOfKeyPressed)
}
