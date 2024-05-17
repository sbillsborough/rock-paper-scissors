// take in two user inputs with prompt
// compare the two user inputs
// assign winning conditions with an if statement
// alert the winner

// User inputs and check if the input is valid
let player1 = prompt("Player 1 choose rock, paper or scissors!");
console.log(player1);

function playerOneChoice() {
  if (player1 === "rock") {
    alert("Player 1 chose: " + player1);
    playerTwoChoice();
  } else if (player1 === "paper") {
    alert("Player 1 chose: " + player1);
    playerTwoChoice();
  } else if (player1 === "scissors") {
    alert("Player 1 chose: " + player1);
    playerTwoChoice();
  } else {
    player1 = prompt("INVALID INPUT! Player 1 choose rock, paper or scissors!");
    playerOneChoice();
  }
}

playerOneChoice();

function playerTwoChoice() {
  console.log("Player 2 choice!");
}
