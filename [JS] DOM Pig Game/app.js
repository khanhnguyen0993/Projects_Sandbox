/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// DRY principle : Don't Repeat Yourself 

var scores, roundScore, activePlayer, gamePlaying, preDice, defaultWinningScore;

init();






document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {
    // 1. Random number
    //var dice = Math.floor(Math.random()*6) + 1;
    var dice1 = Math.floor(Math.random()*6) + 1;
    var dice2 = Math.floor(Math.random()*6) + 1;
    console.log('Dice 1: '+dice1);
    console.log('Dice 2: '+dice2);

    // 2. Display result - Use CSS via JS
    //document.querySelector('.dice').style.display = 'block';
    //var diceDOM = document.querySelector('.dice');
    //diceDOM.style.display = 'block';
    //diceDOM.src = 'dice-' + dice + '.png';
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    // 3. Update the round score IF the rolled number was NOT 1
    //document.querySelector('#current-'+activePlayer).textContent = dice; // this can only set text
    
/*
    if (dice > 1) {
      if (preDice == 6 && dice == 6) {
        // Player loses score
        scores[activePlayer] = 0;
        roundScore = 0;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-'+activePlayer).innerHTML = '<em>' + roundScore + '</em>';
        changeTurn();
      } 
      else {
        // Add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + roundScore + '</em>';
        preDice = dice;
      }
    } else {
      // Next player
      roundScore = 0;
      document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + roundScore + '</em>';
      changeTurn();
    }
*/
    
    if (dice1 != 1 && dice2 != 1) {
      roundScore += dice1 + dice2;
      document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + roundScore + '</em>';
    } else {
      roundScore = 0;
      document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + roundScore + '</em>';
      changeTurn();
    }

  }
});

// anonymous function doesn't have a name, cannot be reused.
document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    document.getElementById('current-'+activePlayer).innerHTML = '<em>' + 0 + '</em>';

    // Check winner
    // Undefined, 0, null, or "" are COERCED to false
    // Anything else is COERCED to true
    var input = document.getElementById('final-score').value;
    defaultWinningScore = input? input : defaultWinningScore;
    if (scores[activePlayer] >= defaultWinningScore) {
      document.getElementById('name-'+activePlayer).textContent = 'Winner!';
      //document.querySelector('.dice').style.display = 'none';
      hideDices();
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      changeTurn();
    }
  }
});


function changeTurn(){
  activePlayer = activePlayer== 0?1:0;
  // change the active state of the class
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  // toggle -> add if it doesn't have sth, remove if it has sth.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //document.querySelector('.dice').style.display = 'none';
  hideDices();

}


// New Game Button 
// call back func (pass func as a para), when hit click then do the func
// NOTE: call back funcs do not have ()
// If put () the func is immediately called
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0; // 0: first player, 1: second player
  gamePlaying = true;
  preDice = 0;
  defaultWinningScore = 100;

  //document.querySelector('.dice').style.display = 'none';
  hideDices();
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  // must remove and then add to avoid having 2 active classes.
  document.querySelector('.player-0-panel').classList.add('active');
}

function hideDices(){
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

// Getter
// var x = document.querySelector('#score-0').textContent;








