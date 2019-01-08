// Business Logic

export function Player(x) {
  this.playerName = x;
  this.playerNumber = 0;
  this.playerScore = 0;
}

var player1 = new Player("");
player1.playerNumber++;
console.log(player1);
var player2 = new Player("");
player2.playerNumber++;
player2.playerNumber++;
console.log(player2);

var PlayerOne = 0;
var PlayerTwo = 0;
var currentPlayer = 1;
var currentRoll = 0;
var currentTurnScore = [];
var addscore = 0;

export var RollTheDice = function(){
  currentRoll = Math.floor((Math.random() * 6 + 1 ));
  if (currentRoll === 1 && currentPlayer === 1) {
    currentPlayer += 1;
    currentTurnScore = [];
  } else if (currentRoll === 1 && currentPlayer === 2) {
    currentPlayer -= 1;
    currentTurnScore = [];
  } else {
    currentTurnScore.push(currentRoll);
    return currentRoll
  }
};

export var HoldTheDice = function(){
  if (currentPlayer === 1) {
    addscore = currentTurnScore.reduce((a, b) => a + b, 0)
    player1.playerScore += addscore;
    currentPlayer += 1;
    currentTurnScore = [];
  } else if (currentPlayer === 2){
    addscore = currentTurnScore.reduce((a, b) => a + b, 0)
    player2.playerScore += addscore;
    currentPlayer -= 1;
    currentTurnScore = [];
  }
};

// UI Logic
