// Business Logic

var Player = {
  playerNumber: 0,
  playerScore: 0,
}

var gameInstance = {
  currentPlayer: 1,
  currentRoll: 0,
  currentTurnScore: [],
  addscore: 0
}

var PlayerOne = 0;
var PlayerTwo = 0;
var currentPlayer = 1;
var currentRoll = 0;
var currentTurnScore = [];
var addscore = 0;

var RollTheDice = function(){
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

var HoldTheDice = function(){
  if (currentPlayer === 1) {
    addscore = currentTurnScore.reduce((a, b) => a + b, 0)
    PlayerOne += addscore;
    currentPlayer += 1;
    currentTurnScore = [];
  } else if (currentPlayer === 2){
    addscore = currentTurnScore.reduce((a, b) => a + b, 0)
    PlayerTwo += addscore;
    currentPlayer -= 1;
    currentTurnScore = [];
  }
};

// UI Logic
$(document).ready(function() {
  $("form#RollingDice").submit(function(event) {
    event.preventDefault();
    RollTheDice();
    $("span#DiceRoll").text("This is what your rolled: " + currentRoll)
  });
  $("form#HoldDice").submit(function(event) {
    event.preventDefault();
    HoldTheDice();
    if (currentPlayer !== 1) {
      $("span#PlayerOneScore").text(PlayerOne);
      $("span#DiceRoll").text("Player One, you've chosen to hold the dice, you added " + addscore + " to your score.")
      addscore = 0;
    } else if (currentPlayer !== 2) {
      $("span#PlayerTwoScore").text(PlayerTwo);
      $("span#DiceRoll").text("Player Two, you've chosen to hold the dice, you added " + addscore + " to your score.")
      addscore = 0;
    }

    if (PlayerOne >= 100) {
    alert("Player One Wins!")
    } else if (PlayerTwo >= 100){
      alert("Player Two Wins!")
    }
  })
});
