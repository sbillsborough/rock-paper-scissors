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

// SCORE GLOBAL VARIABLES
let humanScore = 0;
let computerScore = 0;

// LOGIC TO PLAY A SINGLE ROUND
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase(); // variable reassignment
  console.log(humanChoice + " from playRound function");
  console.log(computerChoice);
}

playRound(getHumanChoice(), getComputerChoice());
