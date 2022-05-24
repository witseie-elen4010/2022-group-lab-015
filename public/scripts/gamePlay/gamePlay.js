'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')
let row = 0
let column = 0
const WordOfTheDay = "shout"
let NumberofCorrectAlphabets = 0


buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  if (valueOfKeyPressed.toUpperCase() === 'ENTER') {
    PlayerPressedEnter()
  }else if(valueOfKeyPressed.toUpperCase() === "DEL"){
     Revert()
     if(column !== 0){
     column -= 1
    }
  } else {
    FillGameBoard(valueOfKeyPressed)
  }
}

function FillGameBoard (userInput) {
  wordElement[row].querySelectorAll('.word')[column].innerText = userInput
  ++column

}

function CheckIfGameEnded(){
  const Word = wordElement[row].querySelectorAll('.word')

 Word.forEach((element, index)=> {
 const indexofwordoftheday = WordOfTheDay.toUpperCase().indexOf(element.innerText.toUpperCase())
 
 if(indexofwordoftheday === index){
  NumberofCorrectAlphabets += 1
}
 
})
if(NumberofCorrectAlphabets === 5 ){
  alert('you win')
}else if(NumberofCorrectAlphabets !== 5 && row === 5){
  alert ('loser')
}

}
  
function PlayerPressedEnter () {
  
  CheckIfGameEnded()
  ++row
  column = 0
}

function Revert(){
  
const WordAlphabet = wordElement[row].querySelectorAll('.word')

for(let index = WordAlphabet.length - 1; index>= 0; index --){
  let CurrentAlphabet = WordAlphabet[index]
  if(CurrentAlphabet.innerText !== ""){
    CurrentAlphabet.innerText = ""
   break
  }
}

}