// Business Logic

function Player(x) {
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
$(document).ready(function() {
  $("form#RollingDice").submit(function(event) {
    event.preventDefault();
    RollTheDice();
    $("span#DiceRoll").text("This is what your rolled: " + currentRoll)
  });

  $("form#PlayerName").submit(function(event){
    console.log("test2");
    event.preventDefault();
    var inputName1 = $("input#playerName1").val();
    var inputName2 = $("input#playerName2").val();
    player1.playerName = inputName1;
    player2.playerName = inputName2;
  });

  $("form#HoldDice").submit(function(event) {
    event.preventDefault();
    HoldTheDice();
    if (currentPlayer !== 1) {
      $("span#PlayerOneScore").text(player1.playerScore);
      $("span#DiceRoll").text("Player One, you've chosen to hold the dice, you added " + addscore + " to your score.")
      addscore = 0;
    } else if (currentPlayer !== 2) {
      $("span#PlayerTwoScore").text(player2.playerScore);
      $("span#DiceRoll").text("Player Two, you've chosen to hold the dice, you added " + addscore + " to your score.")
      addscore = 0;
    }

    if (player1.playerScore >= 100) {
    alert("Player One Wins!")
    } else if (player2.playerScore >= 100){
      alert("Player Two Wins!")
    }
  })
});
