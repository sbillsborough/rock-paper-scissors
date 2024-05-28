// take in two user inputs with prompt
// compare the two user inputs
// assign winning conditions with an if statement
// alert the winner

// COMPUTER CHOICE
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

// HUMAN CHOICE
function getHumanChoice() {
  return prompt("Player choose rock, paper or scissors!");
}

// getHumanChoice();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// LOGIC TO PLAY THE ENTIRE GAME

function playGame() {
  // SCORE GLOBAL VARIABLES
  let humanScore = 0;
  let computerScore = 0;

  // LOGIC TO PLAY A SINGLE ROUND

  function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase(); // variable reassignment
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

playGame();
playGame();
