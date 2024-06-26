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
let roundsPlayed = 0;

// LOGIC TO PLAY THE ENTIRE GAME
// function playGame() {
// LOGIC TO PLAY A SINGLE ROUND
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice + " human choice from playRound function");
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

  ++roundsPlayed;
  console.log("rounds played = " + roundsPlayed);

  console.log(humanScore, computerScore);
  resultsDiv.textContent = `You chose: ${humanChoice}, computer chose: ${computerChoice}. Score: Human = ${humanScore}, Computer = ${computerScore}`;

  if (roundsPlayed === 5) {
    if (humanScore > computerScore) {
      resultsDiv.textContent = `You won the game! With a score of Human: ${humanScore} to Computer: ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
      roundsPlayed = 0;
    } else if (computerScore > humanScore) {
      resultsDiv.textContent = `The computer won the game! With a score of Human: ${humanScore} to Computer: ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
      roundsPlayed = 0;
    } else {
      resultsDiv.textContent = `The game was tied!  With a score of Human: ${humanScore} to Computer: ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
      roundsPlayed = 0;
    }
  }
}
//   return playRound(getHumanChoice(), getComputerChoice());
// }

// LOOP TO PLAY THE GAME 5 TIMES THEN COMPARE THE SCORES
function letsPlay() {
  // for (let i = 0; i < 1; i++) {
  //   playGame();
  // }
  playGame();

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game was tied!");
  }
}

// letsPlay();

// UI BUTTONS

const parentElement = document.querySelector("h1").parentNode;

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.addEventListener("click", () => {
  playRound(btnRock.textContent.toLowerCase(), getComputerChoice());
});

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.addEventListener("click", () => {
  playRound(btnPaper.textContent.toLowerCase(), getComputerChoice());
});

const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.addEventListener("click", () => {
  playRound(btnScissors.textContent.toLowerCase(), getComputerChoice());
});

parentElement.appendChild(btnRock);
parentElement.appendChild(btnPaper);
parentElement.appendChild(btnScissors);

const resultsDiv = document.createElement("div");
parentElement.appendChild(resultsDiv);
