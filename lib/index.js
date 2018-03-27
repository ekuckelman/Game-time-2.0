const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const startButton = document.querySelector('.start');
const winVideo = document.querySelector('.video');
const restartButton = document.querySelector('.reStart');
const levelNum = document.querySelector('.level');
let startScreen = document.querySelector('.start-screen');
let newGame = new Game();
let audio = new Audio('./images/Bomb+2.mp3');
let audio2 = new Audio('./images/Power Failure-SoundBible.com-1821346166.mp3');
let audio3 = new Audio('./images/ragnarok_-_level_up.mp3');
let audio4 = new Audio('images/fail-trombone-01.mp3');
let rightPressed;
let leftPressed;

winVideo.addEventListener('click', restartGame);
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
document.addEventListener('keydown', (e) => keyDown(e), false);
document.addEventListener('keyup', (e) => keyUp(e), false);

const keyDown = (e) => {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
};

const keyUp = (e) => {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
};

function startGame() {  
  startScreen.classList.add('start-game');
  gameLoop();
}

function restartGame() {
  window.location.reload(true);
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  newGame.draw(context);
  newGame.move(canvas, rightPressed, leftPressed);
  newGame.collision(audio, audio2);
  newGame.stats(context);
  if (gameOver(audio4)) {
    return;
  } 
  nextLevel();
  requestAnimationFrame(gameLoop);
}

function nextLevel() {
  if (newGame.newLevel(context)) {
    levelNum.innerText = `Level ${newGame.level}`;
    audio3.play();
    win()
  }
}

function win() {
  if(newGame.level === 3){
    winVideo.style.display = 'block';
    window.cancelAnimationFrame();
  }
}

function gameOver() {
  if (newGame.lives === 0) {
      let showGameOver = document.querySelector('.show-game-over');
            
      showGameOver.classList.remove('game-over');
      audio4.play();
      return true;
    }
}





