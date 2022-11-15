const computerChoiceDisplay = document.getElementById('computer-choice');
const myChoiceDisplay = document.getElementById('my-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('img');

let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   myChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResult ();

}))


function  generateComputerChoice() {
    const randomNumber =Math.floor( Math.random() * possibleChoices.length +1 );
    if (randomNumber === 1 ) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult () {
    if (computerChoice === userChoice) {
        result = 'Its a draw '
    } else if ( computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost'
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost'
    }
    resultDisplay.innerHTML = result;
}
