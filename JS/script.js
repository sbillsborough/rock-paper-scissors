// take in two user inputs with prompt
// compare the two user inputs
// assign winning conditions with an if statement
// alert the winner

let player1 = prompt("Player 1 choose rock, paper or scissors!");
let player2 = prompt("Player 2 choose rock, paper or scissors!");

console.log(`player 1 choice ${player1}`);
console.log(`player 2 choice ${player2}`);

if (player1 === player2) {
  alert(`Player 1 chose ${player1} and Player 2 chose ${player2}. DRAW!`);
} else if (player1 === "rock" && player2 === "paper") {
  alert(
    `Player 1 chose ${player1} and Player 2 chose ${player2}. Player two wins!`
  );
} else if (player1 === "rock" && player2 === "scissors") {
  alert(
    `Player 1 chose ${player1} and Player 2 chose ${player2}. Player one wins!`
  );
} else if (player1 === "paper" && player2 === "rock") {
  alert(
    `Player 1 chose ${player1} and Player 2 chose ${player2}. Player one wins!`
  );
} else if (player1 === "paper" && player2 === "scissors") {
  `Player 1 chose ${player1} and Player 2 chose ${player2}. Player two wins!`;
} else if (player1 === "scissors" && player2 === "rock") {
  `Player 1 chose ${player1} and Player 2 chose ${player2}. Player two wins!`;
} else if (player1 === "scissors" && player2 === "paper") {
  alert(
    `Player 1 chose ${player1} and Player 2 chose ${player2}. Player one wins!`
  );
} else {
  alert(
    `Player 1 entered ${player1} and Player 2 entered ${player2}, please enter valid inputs!`
  );
}
