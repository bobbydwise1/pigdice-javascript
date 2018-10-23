// Business Logic

var PlayerOne = [];
var PlayerTwo = [];
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

  if (currentPlayer === 1) {
    PlayerOne.push(currentTurnScore);
    currentPlayer += 1;
    currentTurnScore = [];
  } else if (currentPlayer === 2){

    currentPlayer -= 1;
    currentTurnScore = [];
  }

  return
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
});
