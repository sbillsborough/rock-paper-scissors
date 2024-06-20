const hands = ["rock", "paper", "scissors"];

const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// HUMAN CHOICE FUNCTION
function getHumanChoice() {
  let valid = false;
  while (!valid) {
    const humanChoice = prompt("Player choose rock, paper or scissors!");
    if (hands.includes(humanChoice)) {
      return humanChoice;
    }
  }
}

// COMPUTER CHOICE FUNCTION
function getComputerChoice(choice = 3) {
  let computerNumber = Math.floor(Math.random() * choice);
  console.log("computer choice " + hands[computerNumber]);
  return hands[computerNumber];
}

// GLOBAL SCORE VARIABLES
let humanScore = 0;
let computerScore = 0;

// LOGIC TO PLAY THE ENTIRE GAME
function playGame() {
  // LOGIC TO PLAY A SINGLE ROUND
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(beats[humanChoice] + " draw");
      console.log("Draw");
    } else if (beats[humanChoice] === computerChoice) {
      console.log(beats[humanChoice] + " win");
      console.log("player wins");
      ++humanScore;
    } else {
      console.log(beats[humanChoice] + " loss");
      console.log("computer wins");
      ++computerScore;
    }
    console.log(humanScore, computerScore);
  }
  return playRound(getHumanChoice(), getComputerChoice());
}

// LOOP TO PLAY THE GAME 5 TIMES THEN COMPARE THE SCORES
function letsPlay() {
  for (let i = 0; i < 1; i++) {
    playGame();
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game was tied!");
  }
}

letsPlay();
