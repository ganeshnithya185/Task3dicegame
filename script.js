const PlayerOne = document.getElementById("player-1");
const PlayerTwo = document.getElementById("player-2");
const Roll1 = document.getElementById("roll-1");
const Roll2 = document.getElementById("roll-2");
const ResetButton = document.getElementById("reset-btn");
const Player1Score = document.getElementById("player1-score");
const Player2Score = document.getElementById("player2-score");
const diceE1 = document.querySelector(".dice");
diceE1.classList.remove("hidden");
ResetButton.disabled = true;

let currentPlayer = PlayerOne;
let gameOver = false;
let score1 = 0;
let score2 = 0;

function roll1() {
  if (!gameOver) {
    diceE1.classList.remove("hidden");
    const dice = Math.floor(Math.random() * 6) + 1;
    diceE1.src = `Images/dice-${dice}.png`;
    score1 += dice;
    Player1Score.textContent = score1;
    CheckWinner();
    switchPlayer();
  }
}
Roll1.addEventListener("click", roll1);

function roll2() {
  if (!gameOver) {
    diceE1.classList.remove("hidden");
    const dice = Math.floor(Math.random() * 6) + 1;
    diceE1.src = `Images/dice-${dice}.png`;
    score2 += dice;
    Player2Score.textContent = score2;
    CheckWinner();
    switchPlayer();
  }
}
Roll2.addEventListener("click", roll2);

function switchPlayer() {
  if (currentPlayer === PlayerOne) {
    currentPlayer = PlayerTwo;
    Roll1.disabled = true;
    Roll2.disabled = false;
  } else {
    currentPlayer = PlayerOne;
    Roll2.disabled = true;
    Roll1.disabled = false;
  }
}
function CheckWinner() {
  if (score1 >= 30 || score2 >= 30) {
    ResetButton.disabled = false;
    gameOver = true;
    if (score1 >= 30 || score1 > score2) {
      const Element1 = document.getElementById("player-1");
      Element1.textContent += " (Winner)";
    } else if (score2 >= 30 && score2 > score1) {
      const Element2 = document.getElementById("player-2");
      Element2.textContent += " (Winner)";
    }
    Roll1.disabled = true;
    Roll2.disabled = true;
  }
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  gameOver = false;
  Roll1.disabled = false;
  Roll2.disabled = true;
  currentPlayer = PlayerOne;
  const Element1 = document.getElementById("player-1");
  Element1.textContent = "Player 1";
  const Element2 = document.getElementById("player-2");
  Element2.textContent = "Player 2";
  Player1Score.textContent = "0";
  Player2Score.textContent = "0";
  diceE1.src = "Images/dice-2.png";
  ResetButton.disabled = false;
}
ResetButton.addEventListener("click", resetGame);
resetGame();
