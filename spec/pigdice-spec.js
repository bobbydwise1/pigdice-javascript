import { Player, player1, player2, addscore, currentPlayer, currentRoll, RollTheDice, HoldTheDice } from '../src/pigdice.js';

describe('PigDiceTests', function(){
  it('should instantiate a player object', function() {
    var testPlayer = new Player("Wade");
    expect(testPlayer.playerName).toEqual("Wade");
  });

  it('should return an integer between 1 and 6', function(){
    var diceRollNumber = RollTheDice();
    var result = 2;
    expect(diceRollNumber).toBeGreaterThan(0);
    expect(diceRollNumber).toBeLessThan(7);
  });

  it('should add the hold value to player1 score after hitting hold button', function() {
    var testPlayer = new Player("Wade");
    var diceRollNumber = RollTheDice();
    if (diceRollNumber === 1) {
      diceRollNumber = RollTheDice();
    } else {
      HoldTheDice();
      expect(player1.playerScore).toBeGreaterThan(0);
    }

  })
});
