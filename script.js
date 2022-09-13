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
const avatarData = ["avatar_1", "avatar_1", "avatar_1"];
// Initialization of score when first page loaded
let score = [5, 5];

// Randomly choose between the possibilities inside the availableChoices Array
function getComputerChoice() {
  return availableChoices[Math.floor(Math.random() * availableChoices.length)];
}

// Ask the player choice and validate it as valid possibility (case sensitive, spelling...)
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

  // Expecting the input to come from the UI => New condition to set
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
      // Give back information to UI
      break;
    case "user":
      computerScore = computerScore - 1;
      // Give back information to UI
      break;
    case "computer":
      userScore = userScore - 1;
      // Give back information to UI
      break;
  }
  score = [userScore, computerScore];
  // Give back information by updating lifeBar !!
  return score;
}

function game() {
  while (score[0] > 0 && score[1] > 0) {
    let userChoice = getPlayerChoice();
    // Update the gameBoy div => updateGameBoyUser
    let computerChoice = getComputerChoice();
    // Update the gameBoy div => updateGameBoyComputer
    let winner = playRound(userChoice, computerChoice);
    // Update the gameBoy div => updateGameBoy-Result
    updateScore(score[0], score[1], winner);
  }
}

// game();

// --------------------------------------------- SAND ---------------------------------------------

const div = document.querySelector(".container");
div.addEventListener("click", (e) => {
  score = [5, 5];
  game();
});
