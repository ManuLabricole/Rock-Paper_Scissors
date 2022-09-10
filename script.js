// ------------------------------------------------- DESCRIPTION ------------------------------------------------ //
// -------------------------------------------------------------------------------------------------------------- //

// This script is the logic of the Game
// It takes the user input and generate a random computer choice
// Compare the two choices and return a winner
// Stock in a variable the number of victory and return the overall winer on the X party

// -------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //

// Define all the possible choices of the game in an Array
const availableChoices = ["ROCK", "PAPER", "SCISSORS"];
let score = [5, 5];
// let userScore = 5;
// let computerScore = 5;

console.log("start");

// Randomly choose between the possibilities inside the availableChoices Array
function getComputerChoice() {
  return availableChoices[Math.floor(Math.random() * availableChoices.length)];
}

// Ask the player and validate as valid possibility
function getPlayerChoice() {
  // Build an non sensitive case to prevent un validation because of it
  let playerChoice = prompt("Make your choice");
  playerChoice = playerChoice.toUpperCase();
  //   Validate the user selection Or ask another input
  if (availableChoices.includes(playerChoice)) return playerChoice;
  else {
    alert("Please try again !");
    return "ERROR";
  }
}

function playRound(userChoice, computerChoice) {
  // Treat the equal case first
  if (userChoice === computerChoice) return "tie";
  // If not Equal => Take userChoice and compare to the 2 other possibilities and return the winner
  else if (userChoice === "PAPER") {
    if (computerChoice === "ROCK") return "user";
    if (computerChoice === "SCISSORS") return "computer";
  } else if (userChoice === "SCISSORS") {
    if (computerChoice === "PAPER") return "user";
    if (computerChoice === "ROCK") return "computer";
  } else if (userChoice === "ROCK") {
    if (computerChoice === "SCISSORS") return "user";
    if (computerChoice === "PAPER") return "computer";
  }
}

// Ready the "winner returning by playRound function => Updating the Array score depending on the case "
function updateScore(userScore, computerScore, winner) {
  switch (winner) {
    case "tie":
      break;
    case "user":
      computerScore = computerScore - 1;
      break;
    case "computer":
      userScore = userScore - 1;
      break;
  }
  score = [userScore, computerScore];
  return score;
}

function game() {
  while (score[0] > 0 && score[1] > 0) {
    let computerChoice = getComputerChoice();
    let userChoice = getPlayerChoice();
    let winner = playRound(userChoice, computerChoice);
    updateScore(score[0], score[1], winner);
  }
}

game();

const div = document.querySelector(".container");
div.addEventListener("click", (e) => {
  score = [5, 5];
  game();
});
