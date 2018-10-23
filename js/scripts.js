// Business Logic
var currentRoll = 0;

var RollTheDice = function(){
  currentRoll = Math.floor((Math.random() * 6 + 1 ));
  console.log("This is the current roll: " + currentRoll);
  return currentRoll
};

// UI Logic
$(document).ready(function() {
  $("form#RollingDice").submit(function(event) {
    event.preventDefault();
    RollTheDice();
    $("span#DiceRoll").text("This is what your rolled: " + currentRoll)

  });
});
