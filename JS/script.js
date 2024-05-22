// take in two user inputs with prompt
// compare the two user inputs
// assign winning conditions with an if statement
// alert the winner

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

console.log(getComputerChoice());
