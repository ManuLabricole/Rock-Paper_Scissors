// -----> Function n°1 => First Animation when page loaded
const body = document.querySelector("body");
const gameContainerArea = document.getElementById("game-container");
const gameboyArea = document.getElementById("gameboy-area");

const avatarComputerContainer = document.querySelector(
  ".computer-avatar-container"
);
const startButton = document.getElementById("start-button");
const bgImg = document.getElementById("bg_img");
const playerArea = document.getElementById("player-area");

const computerArea = document.getElementById("computer-area");

const gbScreen = document.getElementById("gb-screen");

// List created to get "avatar" string to load avatar image in later functions
const avatarList = [
  "avatar_1",
  "avatar_2",
  "avatar_3",
  "avatar_4",
  "avatar_5",
  "avatar_6",
  "avatar_7",
  "avatar_8",
];
const avatarTreshold = avatarList.length;

// State constant to handle prevent handling and co
let isBlinkRunning = false;

// --------------------------------------------------------------------------------------------//
// -----> Function n°1 => Pass layout style from Load --> Land. Automatic = Animation

// First by Timeout function first called in app.js
function loadAnimation() {
  bgImg.classList.remove("loadState");
  bgImg.classList.add("landingState");
  gameboyArea.classList.remove("loadState");
  gameboyArea.classList.add("landingState");
  createStartButton();
  pageState = "landingState";
}

// -----> Function n°2 => Create Start button on Gameboy Image

function createStartButton() {
  // Add style to attract user attention and remove on hover
  startButton.addEventListener("mouseenter", function (e) {
    let startButtonClass = e.target.classList.value;
    if (startButtonClass.includes("detected")) {
      return;
    } else if (startButtonClass.includes("gameOff")) {
      return;
    } else {
      startButton.classList.add("detected");
    }
  });
  startButton.addEventListener("click", () => {
    startButtonPressed(pageState);
  });
}

// --------------------------------------------------------------------------------------------//
// -----> Function n°3 => Create player area container

function createPlayerArea() {
  const playerAreaDiv = document.createElement("div");
  const selectPlayerH1 = document.createElement("h1");
  const avatarPlayerContainer = document.createElement("div");
  playerAreaDiv.id = "player-area";
  playerAreaDiv.classList = "player-area gameOff";

  gameContainerArea.insertBefore(playerAreaDiv, gameboyArea);
  return;
}
