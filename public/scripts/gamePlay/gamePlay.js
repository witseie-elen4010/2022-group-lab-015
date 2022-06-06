'use strict'
const buttonElement = document.querySelectorAll('button')
const wordElement = document.querySelectorAll('.word-row')

let row = 0
let column = 0
const WordOfTheDay = 'ShOuT'
let NumberofCorrectAlphabets = 0
let enteredWord = ''
let boardState = []
let counter = 0
let wordtemp = []

buttonElement.forEach((element) => {
  element.addEventListener('click', function () {
    keyIsPressed(element.attributes['data-key'].value)
  })
})

function keyIsPressed (valueOfKeyPressed) {
  if (valueOfKeyPressed.toUpperCase() === 'ENTER') {
    saveBoardState(enteredWord, row)
    enteredWord = ''
    PlayerPressedEnter()
  } else if (valueOfKeyPressed.toUpperCase() === 'DEL') {
    Revert()
    if (column !== 0) {
      column -= 1
    }
  } else {
    FillGameBoard(valueOfKeyPressed)
    enteredWord = enteredWord + valueOfKeyPressed
  }
}

function FillGameBoard (userInput) {
  wordElement[row].querySelectorAll('.word')[column].innerText = userInput
  wordtemp[column] = userInput
  ++column
}

function CheckIfGameEnded () {
  const Word = wordElement[row].querySelectorAll('.word')
  let WordOfTheDay = 'HELLO'
  NumberofCorrectAlphabets = 0
 for(let index = 0;index<5;index++){
  
     if(Word[index].innerText === WordOfTheDay[index]){
      WordOfTheDay = WordOfTheDay.replace(Word[index].innerText,' ')
      NumberofCorrectAlphabets += 1
       Word[index].classList.add('word-green')
       if (NumberofCorrectAlphabets === 5) {
         setTimeout(function () {
           // your code to be executed after 1 second
           boardState = {}
           window.localStorage.clear()
           window.location.assign('/play/won')
         }, 2000)
       } else if (NumberofCorrectAlphabets !== 5 && row === 5) {
        boardState = {}
        window.localStorage.clear() 
        window.location.assign('/play/tryAgain')
       }
      }else if(WordOfTheDay.includes(Word[index].innerText) && Word[index] !== WordOfTheDay[index]){
        WordOfTheDay = WordOfTheDay.replace(Word[index].innerText,'')
           Word[index].classList.add('word-orange')
      }
    else{ Word[index].classList.add('word-grey') }
  }

}

function PlayerPressedEnter () {
  if (column < 5) {
    alert('The guessed word must be five characters')
  } else {
    CheckIfGameEnded()
    // 1. fetch the letters the player has entered.
    // 2. check if the letters in each column match
    // any of the letters in the wordoftheday.
    // 3. check if the index of the matching letters matches
    // the index of the letters in wordoftheday
    // 4. make the block orange if they do not and green if they do
    ++row
    column = 0
  }
}

function Revert () {
  const WordAlphabet = wordElement[row].querySelectorAll('.word')

  for (let index = WordAlphabet.length - 1; index >= 0; index--) {
    const CurrentAlphabet = WordAlphabet[index]
    if (CurrentAlphabet.innerText !== '') {
      CurrentAlphabet.innerText = ''
      break
    }
  }
}

function saveBoardState(word_, row_) {
  let temp = {
    row: row_, 
    word: word_
  }

  //put the latest word for that row and save updated obj
  boardState.push(temp)

  //if word for that row is incomplete or is already there, remove it
  for (let i=0; i<boardState.length; i++) {
    //console.log(boardState[i].word)
    if (boardState[i].word.length < 4)
    {
      //console.log(boardState[i].word)
      boardState.pop()
    }
  }
  
  localStorage.setItem("board", JSON.stringify(boardState))
  //console.log(JSON.parse(localStorage.getItem("board")))
}

window.addEventListener('load', (event) => {
  console.log("Page has been refreshed")
  ++counter
})
window.onload = (event) => {
  console.log(`${wordtemp}`)
  ++counter
  let boardState = localStorage.getItem("board")
  boardState = JSON.parse(boardState)
  console.log(boardState)
  // boardState.array.forEach(elem => {
  //   for (let col=0; col<5; col++) {
  //     FillGameBoard(elem.word.charAt(col))
  //     if (col === 4) {
  //       CheckIfGameEnded()
  //     }
  //   }
  // });
}

