'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')
let row = 0
let column = 0
const WordOfTheDay = "shout"
let NumberofCorrectAlphabets = 0
let enteredWord = ""


buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  if (valueOfKeyPressed.toUpperCase() === 'ENTER') {
    CheckCorrectInputs(enteredWord)
    enteredWord = ""
    PlayerPressedEnter()
  }else if(valueOfKeyPressed.toUpperCase() === "DEL"){
     Revert()
     if(column !== 0){
     column -= 1
    }
  } else {
    FillGameBoard(valueOfKeyPressed)
    enteredWord = enteredWord + valueOfKeyPressed
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
  window.location.assign('/play/won')
}else if(NumberofCorrectAlphabets !== 5 && row === 5){
  window.location.assign('/play/tryAgain')
}

}
  
function PlayerPressedEnter () {
  
  CheckIfGameEnded()
  //1. fetch the letters the player has entered.
  //2. check if the letters in each column match 
  //any of the letters in the wordoftheday.
  //3. check if the index of the matching letters matches
  //the index of the letters in wordoftheday
  //4. make the block orange if they do not and green if they do 
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

function CheckCorrectInputs(elem) {
  
}