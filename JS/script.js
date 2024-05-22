// take in two user inputs with prompt
// compare the two user inputs
// assign winning conditions with an if statement
// alert the winner

function getComputerChoice(choice = 3) {
  return Math.floor(Math.random() * choice);
}

console.log(getComputerChoice());
