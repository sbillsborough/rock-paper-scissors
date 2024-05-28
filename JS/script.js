// HUMAN CHOICE FUNCTION
function getHumanChoice() {
  return prompt("Player choose rock, paper or scissors!");
}

// COMPUTER CHOICE FUNCTION
function getComputerChoice(choice = 3) {
  let computerNumber = Math.floor(Math.random() * choice);
  if (computerNumber === 0) {
    return "rock";
  } else if (computerNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// GLOBAL SCORE VARIABLES
let humanScore = 0;
let computerScore = 0;

// LOGIC TO PLAY THE ENTIRE GAME
function playGame() {
  // LOGIC TO PLAY A SINGLE ROUND
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
      console.log("DRAW");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("Computer wins! Paper beats Rock");
      ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("Computer wins! Scissors beats paper");
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("Computer wins! Rock beats Scissors");
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      ++humanScore;
    }
    console.log(humanScore, computerScore);
  }
  return playRound(getHumanChoice(), getComputerChoice());
}

// LOOP TO PLAY THE GAME 5 TIMES THEN COMPARE THE SCORES
function letsPlay() {
  for (let i = 0; i < 5; i++) {
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
