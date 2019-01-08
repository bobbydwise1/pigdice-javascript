// UI Logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { player1, player2, addscore, currentPlayer, currentRoll, RollTheDice, HoldTheDice } from './pigdice.js';
import './styles.css';

$(document).ready(function() {

  $("form#RollingDice").submit(function(event) {
    event.preventDefault();
    RollTheDice();
    $("span#DiceRoll").text("This is what your rolled: " + currentRoll);
  });

  $("form#PlayerName").submit(function(event){
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
      $("span#DiceRoll").text("Player One, you've chosen to hold the dice, you added " + addscore + " to your score.");
    } else if (currentPlayer !== 2) {
      $("span#PlayerTwoScore").text(player2.playerScore);
      $("span#DiceRoll").text("Player Two, you've chosen to hold the dice, you added " + addscore + " to your score.");
    }
    if (player1.playerScore >= 20) {
      alert("Player One, " + player1.playerName + ", Wins!");
    } else if (player2.playerScore >= 20){
      alert("Player Two, " + player2.playerName + ", Wins!", );
    }
  });
});
