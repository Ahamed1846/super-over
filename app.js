//getting elements on which action has to be performed

var strike= document.getElementById("strike")
var playerOneScoreElement = document.getElementById("score-team1")
var playerOneWicketElement = document.getElementById("wickets-team1")
var playerTwoScoreElement = document.getElementById("score-team2")
var playerTwoWicketElement = document.getElementById("wickets-team2")
var resetButton= document.getElementById("reset")
var playerBalls=1
var player1score = 0
var player1wicket = 0
var player2wicket = 0
var player2score = 0



function gameOver() {
  if (player1score>player2score) {
    window.alert("IND Wins")
  } else if (player1score<player2score) {
    window.alert("PAK Wins")
  } else {
    window.alert("Draw")
  }
}

function getRandomOutcome() {
  possibleOutcomes = [0, 1, 2, 3, 4, 5, 6, 'w'];
  return possibleOutcomes[Math.floor((Math.random()*possibleOutcomes.length))]
}

function updateP1Scoreboard() {
  playerOneScoreElement.textContent=player1score;
  playerOneWicketElement.textContent=player1wicket;
}

var turn=1;

strike.onclick=()=>{
  let randomOutcome = getRandomOutcome()
  console.log(randomOutcome)

resetButton.onclick=()=>{
  window.location.reload()
}



function updateP2Scoreboard() {
  playerTwoScoreElement.textContent=player2score;
  playerTwoWicketElement.textContent=player2wicket;
}

if (turn==2) {
    document.querySelector(`#team2-superover div:nth-child(${playerBalls})`).textContent=randomOutcome;
playerBalls++;

if(randomOutcome=='w') {
  player2wicket=player2wicket+1
} else {
  player2score= player2score + randomOutcome;
}

updateP2Scoreboard();
if (playerBalls>6 || player2wicket>2 || player1score<player2score){
  console.log("Game ends")
  turn=0;
  playerBalls=1
  gameOver()
  }
  
}

if(turn==1){
  document.querySelector(`#team1-superover div:nth-child(${playerBalls})`).textContent=randomOutcome;
playerBalls++;

if(randomOutcome=='w') {
player1wicket=player1wicket+1
} else {
player1score= player1score + randomOutcome;
}

updateP1Scoreboard();
if (playerBalls>6){
console.log("player 2 should start")
turn=2;
playerBalls=1;
}
}
//adding the current ball scores in the UI
}







