// create display variables
const userChoiceDisplay = document.createElement('h2');
const computerChoiceDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h1');

// create variable which points to the game html div element
const gameGrid = document.getElementById('game');

// add the display variables to the gameGrid object
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

// create array of the choices
const choices = ['rock', 'paper', 'scissors']

// create the userChoice object
let userChoice;
let computerChoice;

// create the handleClick function
const handleClick = (e) => {
    //assign the userChoice object the id of the button that was clicked
    userChoice = e.target.id;
    // assigns the display attribute of the userChoiceDisplay object to the value of userChoice
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
    
    generateComputerChoice();
    getResult();
}

// create the generateComputerChoice function
    // creates a random choice by generating a random index for the choices array
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice;
}

// loop to create buttons for each choice
for (let i = 0; i < choices.length; i++) {
    // create a button element for each choice
    const button = document.createElement('button');
    // gives the button a unique id based on its index in the array
    button.id = choices[i];
    // displays the choice text in the button
    button.innerHTML = choices[i];
    // listens for a click on the button element and calls the handleClick callback function
    button.addEventListener('click', handleClick);
    // add the button to the gameGrid object
    gameGrid.appendChild(button);
}

// function to evaluate the result of the game with a switch call
const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'YOU WIN :)';
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'YOU LOSE :(';
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            resultDisplay.innerHTML = 'IT\'S A DRAW :|';
             break;
}}
