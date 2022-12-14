const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const displayResult = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()

}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    else if (randomNumber === 3) {
        computerChoice = 'scissors';
        
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a tie!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you won!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost :(';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you won!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost :(';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you won!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost :(';
    }
    displayResult.innerHTML = result;
}