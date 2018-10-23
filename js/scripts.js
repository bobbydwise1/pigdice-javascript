// Business Logic

var PlayerOne = 0;
var PlayerTwo = 0;
var currentPlayer = 1;
var currentRoll = 0;
var currentTurnScore = [];

var RollTheDice = function(){
  currentRoll = Math.floor((Math.random() * 6 + 1 ));
  if (currentRoll === 1 && currentPlayer === 1) {
    currentPlayer += 1;
    currentTurnScore = [];
    console.log("Sorry, you rolled a one, next players turn");
  } else if (currentRoll === 1 && currentPlayer === 2) {
    currentPlayer -= 1;
    currentTurnScore = [];
    console.log("Sorry, you rolled a one, next players turn");
  } else {
    currentTurnScore.push(currentRoll);
    console.log("This is the current turn score: " + currentTurnScore);
    console.log("This is the current roll: " + currentRoll);
    return currentRoll
  }
};

var HoldTheDice = function(){
  console.log("This is Hold The Dice working.");
  if (currentPlayer === 1) {
    PlayerOne += currentTurnScore.reduce((a, b) => a + b, 0);
    console.log("Player One, you've chosen to hold the dice, here's your score: " + PlayerOne);
    currentPlayer += 1;
    currentTurnScore = [];
  } else if (currentPlayer === 2){
    PlayerTwo += currentTurnScore.reduce((a, b) => a + b, 0);
    console.log("Player Two, you've chosen to hold the dice, here's your score: " + PlayerTwo);
    currentPlayer -= 1;
    currentTurnScore = [];
  }
};

var playerTurn = function(){

}

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
    } else if (currentPlayer !== 2) {
      $("span#PlayerTwoScore").text(PlayerTwo);
    }

    $("span#DiceRoll").text("You chose to hold the dice: " + currentRoll)
  })
});
