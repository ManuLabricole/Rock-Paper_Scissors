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
  playerAreaDiv.classList = "player-area landingState";
  selectPlayerH1.innerHTML = "SELECT PLAYER";
  selectPlayerH1.id = "selectPlayer";
  avatarPlayerContainer.classList = "avatar-container";

  playerAreaDiv.appendChild(selectPlayerH1);
  playerAreaDiv.appendChild(avatarPlayerContainer);
  gameContainerArea.insertBefore(playerAreaDiv, gameboyArea);
}
function createComputerArea() {
  const computerAreaDiv = document.createElement("div");
  const selectComputerH1 = document.createElement("h1");
  const avatarComputerContainer = document.createElement("div");
  computerAreaDiv.id = "computer-area";
  computerAreaDiv.classList = "computer-area landingState";
  selectComputerH1.innerHTML = "COMPUTER CHOICE...";
  selectComputerH1.id = "computerPlayer";
  avatarComputerContainer.classList = "computer-avatar-container";

  computerAreaDiv.appendChild(selectComputerH1);
  computerAreaDiv.appendChild(avatarComputerContainer);
  gameContainerArea.appendChild(computerAreaDiv);
}

const addAvatar = async (filledDiv) => {
  // Need to wait that the previous main Div is created to call query selector
  console.log(filledDiv);
  if (filledDiv === "avatar-container") {
    await createPlayerArea();
    filledDiv = document.querySelector("." + filledDiv);
    avatarList.forEach((name) => {
      // Create div with classList "avatar-card"
      let newDiv = document.createElement("div");
      // Add img with corresponding avatarList[X] avatar inside div
      let img = document.createElement("img");
      img.id = `${name}`;
      img.src = "./assets/img/avatar/" + `${name}` + ".png";
      newDiv.appendChild(img);

      // Add the functions to each DIV per avatar IF in player selection. Computer Avatar have no interaction
      newDiv.classList.add("avatar-card");
      newDiv.classList.add("player");
      newDiv.addEventListener("click", getPlayerAvatarChoice);

      newDiv.classList.add("avatar-card");
      filledDiv.appendChild(newDiv);
    });
  } else if (filledDiv === "computer-avatar-container") {
    await createComputerArea();
    filledDiv = document.querySelector("." + filledDiv);
    avatarList.forEach((name) => {
      // Create div with classList "avatar-card"
      let newDiv = document.createElement("div");
      // Add img with corresponding avatarList[X] avatar inside div
      let img = document.createElement("img");
      img.id = `${name}`;
      img.src = "./assets/img/avatar/" + `${name}` + ".png";
      newDiv.appendChild(img);
      newDiv.classList.add("avatar-card");
      filledDiv.appendChild(newDiv);
    });
  }
};

function getPlayerAvatarChoice(e) {
  // html collection to Array to use forEach() method
  //   let avatarPlayerContainerChild = Array.from(avatarPlayerContainer.children);
  avatarPlayerContainerChild = Array.from(avatarPlayerContainer.children);
  let targetClass = e.target.classList.value;

  //   Detect and store the click by the user to lock double click while BlinkingRunning
  isBlinkRunning = true;
  avatarPlayerContainerChild.forEach((child) => {
    //   Remove the previous avatar selected
    if (child.classList.value.includes("active")) {
      child.classList.remove("active");
    } else {
      return;
    }
  });

  //   Then add the class to the target click div with child click handling
  //   If the click is on the DIV element add the class to the target
  if (targetClass.includes("avatar-card")) {
    e.target.classList.add("active");
    playerAvatar = Array.from(e.target.children)[0].id;
  } else {
    // If the click is on the img child of DIV - get the parent and add the class
    e.target.parentElement.classList.add("active");
    playerAvatar = e.target.id;
  }

  // setAvatarClickEvent(isBlinkRunning);
  //computerChoiceAnimation();
}

// Function called when started is pressed when we are in landing state
function passToGameOffState() {
  gameContainerArea.classList.add("gameOff");
  playerArea.classList.remove("landingState");
  playerArea.classList.add("gameOff");
  computerArea.classList.remove("landingState");
  computerArea.classList.add("gameOff");
  gameboyArea.classList.remove("landingState");
  gameboyArea.classList.add("gameOff");
  startButton.classList.remove("detected");
  startButton.classList.add("gameOff");
  gbScreen.classList.add("gameOff");
  pageState = "gameOff";
}
