document.addEventListener("DOMContentLoaded", () => {
// global variables

const squares = document.querySelectorAll('.grid div');
const scoreDisplay = document.querySelector('span');
const startBtn = document.querySelector('.start');

const width = 10;

let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2,1,0];
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

// function to start / restart

function startGame(e) {
  currentSnake.forEach(index => squares[index].classList.remove('snake'));
  squares[appleIndex].classList.remove('apple');
  clearInterval(interval);
  score = 0;
  randomApple();
  direction = 1;
  scoreDisplay.innerText =score;
  console.log(score);
  intervalTime = 1000;
  currentSnake = [2,1,0];
  currentIndex = 0;
  currentSnake.forEach(index => squares[index].classList.add('snake'));
  interval = setInterval(moveOutcomes, intervalTime);
}



function moveOutcomes() {
//snake hits border or self
if (
  (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
  (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
  (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
  (currentSnake[0] - width < 0 && direction === -width) || //if snake hits top
  squares[currentSnake[0] + direction].classList.contains('snake')//snake hits itself 
  ) 
  {
    return clearInterval(interval); // clears interval if any of above occurs
  }

  const tail = currentSnake.pop(); //removes last item of the array and shows it
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction); // gives direction to current head of the array

//snake hits apple
if (squares[currentSnake[0]].classList.contains('apple')) {
  squares[currentSnake[0]].classList.remove('apple');
  squares[tail].classList.add('snake');
  currentSnake.push(tail);
  randomApple();
  score++;
  scoreDisplay.innerText = score;
  console.log(scoreDisplay.textContent);
  console.log(score);
  clearInterval(interval);
  intervalTime = intervalTime * speed;
  interval = setInterval(moveOutcomes, intervalTime);
}
squares[currentSnake[0]].classList.add('snake');
}

// generate new random apple once one is eaten

function randomApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake')) {
    squares[appleIndex].classList.add('apple');
  }
}

//assign functions to keycodes

function control(e) {
  squares[currentIndex].classList.remove('snake'); // removes the snake briefly from current divs

  if (e.code === 'ArrowRight') {
    direction = 1; // advances 1 div, appears to go right
  }
  else if (e.code === 'ArrowUp') {
    direction = -width; // goes back 10 divs, appears to go up
  }
  else if (e.code === 'ArrowLeft') {
    direction = -1;  // goes back 1 div, appears to go left
  }
  else if (e.code === 'ArrowDown') {
    direction = +width; // advances 10 divs, appears to go down
  }
}

document.addEventListener('keyup', control);
startBtn.addEventListener('click', startGame);

});