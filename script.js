const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");
const CurrentScore0 = document.querySelector("#current--0");
const CurrentScore1 = document.querySelector("#current--1");
const Score0 = document.querySelector("#score--0");
const Score1 = document.querySelector("#score--1");

let currentPlayer = 0;

function Highlight() {
  //Function that highlights the current player
  if (currentPlayer == 0) {
    document.querySelector(".player--0").classList.add("highlight");
    document.querySelector(".player--1").classList.remove("highlight");
  } else {
    document.querySelector(".player--1").classList.add("highlight");
    document.querySelector(".player--0").classList.remove("highlight");
  }
}

function ResetGame() {
  //Function that resets all values
  Score0.textContent = 0;
  Score1.textContent = 0;
  CurrentScore0.textContent = 0;
  CurrentScore1.textContent = 0;
  currentPlayer = 0;
  Highlight();
}

function RollDice() {
  //Function that rolls the dice and changes the image

  let DiceValue = Math.floor(Math.random() * 6);
  dice.src = `dice-${DiceValue + 1}.png`;
  console.log(DiceValue + 1);
  if (currentPlayer == 0) {
    x = parseInt(CurrentScore0.textContent);
    x += DiceValue + 1;
    CurrentScore0.textContent = x;
  } else {
    x = parseInt(CurrentScore1.textContent);
    x += DiceValue + 1;
    CurrentScore1.textContent = x;
  }
  if (DiceValue == 0 && currentPlayer == 0) {
    CurrentScore0.textContent = 0;
    currentPlayer = 1;
    Highlight();
  } else if (DiceValue == 0 && currentPlayer == 1) {
    CurrentScore1.textContent = 0;
    currentPlayer = 0;
    Highlight();
  }
}

function Hold() {
  //Function that changes the player
  if (currentPlayer == 0) {
    let x = parseInt(Score0.textContent);
    x += parseInt(CurrentScore0.textContent);
    Score0.textContent = x;
    CurrentScore0.textContent = 0;
    currentPlayer = 1;
    Highlight();
  } else {
    let x = parseInt(Score1.textContent);
    x += parseInt(CurrentScore1.textContent);
    Score1.textContent = x;
    CurrentScore1.textContent = 0;
    currentPlayer = 0;
    Highlight();
  }
}

function hasWon() {
  //Function that checks if a player has won
  let gameWon = false;
  if (parseInt(Score0.textContent) >= 100) {
    alert("Player 1 has won.New game will start!");
    gameWon = true;
  } else if (parseInt(Score1.textContent) >= 100) {
    alert("Player 2 has won.New game will start!");
    gameWon = true;
  }
  if (gameWon) {
    ResetGame();
  }
}

function newGame() {
  //Function that starts a new game
  ResetGame();
}

Highlight(); //Highlights the first player

btnRoll.addEventListener("click", () => {
  RollDice();
}); //Event listener for the roll button

btnHold.addEventListener("click", () => {
  Hold();
  hasWon();
}); //Event listener for the hold button that changes the player

btnNew.addEventListener("click", newGame); //Event listener for the new game button
