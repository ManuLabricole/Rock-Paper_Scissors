// -----> Function n°1 => First Animation when page loaded
const body = document.querySelector("body");
const gameContainerArea = document.getElementById("game-container");
const gameboyArea = document.getElementById("gameboy-area");
const startButton = document.getElementById("start-button");
const bgImg = document.getElementById("bg_img");
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

// -----> Function n°2 => Create Start button on Gameboy Image --> This will be the first Click form user

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

// --------------------------------------------------------------------------------------------//
// -----> Function n°4 => Add avatar in computer or player Area depednding on input

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

// --------------------------------------------------------------------------------------------//
// Function triggered when user select an avatar ----------------------------------------------//
// ----> Function n°5 : Blinking animation & random computer choice in last loop
function avatarBlinkloop(recallLoopCounter, loopCounter, avatarTriggerNum) {
  let avatarComputerContainer = document.querySelector(
    ".computer-avatar-container"
  );
  const avatarComputerContainerChild = Array.from(
    avatarComputerContainer.children
  );
  // Set true to prevent double click
  isBlinkRunning = true;

  // get an array with all the div containing avatar previously created

  let loopCount = recallLoopCounter;
  let counter = loopCounter;

  setTimeout(function () {
    if (counter === 0) {
      // Initilization : Active the first avatar
      avatarComputerContainerChild[counter].classList.add("active");
      counter++;
    } else if (counter > 0 && counter < avatarTriggerNum) {
      // In between : Desactive previous & active current until counter = last avatar
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      avatarComputerContainerChild[counter].classList.add("active");
      counter++;
    } else if (counter === avatarTriggerNum && loopCount > 0) {
      // Case Last avatar Div active AND Still loop animation to do
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      loopCount--;
      counter = 0;
    } else if (counter === avatarTriggerNum && loopCount === 0) {
      // Case Last avatar Div active last loop until random choice
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      loopCount = -1;
      counter = 0;
      avatarTriggerNum = Math.floor(Math.random() * avatarList.length); // random computer selection
      computerAvatar = avatarList[avatarTriggerNum];
    } else if (loopCount === -1) {
      isBlinkRunning = false;
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      avatarComputerContainerChild[counter].classList.add("active");
      setAvatarClickEvent(isBlinkRunning);
      displayVersusDiv(playerAvatar, computerAvatar);
      return "run";
    }
    avatarBlinkloop(loopCount, counter, avatarTriggerNum);
  }, 40);
}

// --------------------------------------------------------------------------------------------//
// Function triggered when computerChoice is DONE
// This function will get & Display the two choices
// Create a div with Avatar chosen : "Player VS Computer" display
// Finally will add a START button to laumnch the game

// ----> Function n°6 : Create | Remove and Display Results of avatar choices

// If already displayed, removed the previous to prevent superposition
function removeVersusDiv() {
  let previousVersusDiv = Array.from(
    document.getElementsByClassName("versusArea")
  );
  //   If already ran, we have to remove the previsou display of result
  if (previousVersusDiv[0]) {
    previousVersusDiv[0].remove();
  }
}

function displayVersusDiv(playerId, computerId) {
  pageState = "gameOff";
  removeVersusDiv();

  let versusDiv = document.createElement("div");
  let newPlayerAvatarDiv = document.createElement("div");
  let imgPlayer = document.createElement("img");
  let versusTextDiv = document.createElement("div");
  let newComputerAvatarDiv = document.createElement("div");
  let imgComputer = document.createElement("img");

  versusDiv.classList.add("versusArea");

  // Add img with corresponding to player-id selected inside div

  imgPlayer.id = playerId;
  imgPlayer.src = "./assets/img/avatar/" + playerId + ".png";
  newPlayerAvatarDiv.appendChild(imgPlayer);
  newPlayerAvatarDiv.classList.add("avatar-card");

  // insert VS text in div
  versusTextDiv.innerHTML = "VS";
  versusTextDiv.classList.add("versusText");

  // Add img with corresponding to randomChoice in blinking function
  // Then the number is associated to the avatarList Array
  imgComputer.id = computerId;
  imgComputer.src = "./assets/img/avatar/" + computerId + ".png";
  newComputerAvatarDiv.appendChild(imgComputer);
  newComputerAvatarDiv.classList.add("avatar-card");

  versusDiv.appendChild(newPlayerAvatarDiv);
  versusDiv.appendChild(versusTextDiv);
  versusDiv.appendChild(newComputerAvatarDiv);
  body.appendChild(versusDiv);

  displayPlayButton();
}

// ----> Function n°7 : Create | Remove and Display PlayButton

function removePlayButton() {
  // If two choices of avatar, remove the previous playButton added
  if (document.getElementById("playButton")) {
    let previousPlayButton = document.getElementById("playButton");
    previousPlayButton.remove();
  }
}

function displayPlayButton() {
  removePlayButton();
  // Timeout function to add the play Button because of blinking Animation
  setTimeout(function () {
    let playButton = document.createElement("div");
    let playImg = document.createElement("img");
    playButton.id = "playButton";
    playButton.classList.add("playButton");
    playImg.id = "playButtonImgId";
    playImg.src = "./assets/img/playButton.png";
    playButton.addEventListener("click", playButtonPressed);
    playButton.appendChild(playImg);
    gbScreen.appendChild(playButton);
  }, 10);
}

// ------------------------------------------------------------------------------------------//
// ----> Function n°8 : Remove AvatarArea when start clicked from gameOff

function removeAvatarArea() {
  let playerArea = document.getElementById("player-area");
  let computerArea = document.getElementById("computer-area");
  playerArea.remove();
  computerArea.remove();
}

function playPressedLayoutUpdate() {
  removePlayButton();
  removeVersusDiv();
  removeAvatarArea();
}

// ------------------------------------------------------------------------------------------//
// ----> Function n°9 : Add gamePlay into Screen

function addAvatarOnScreen(playerId, computerId) {
  let playerAvatarDiv = document.createElement("div");
  let computerAvatarDiv = document.createElement("div");
  let imgPlayer = document.createElement("img");
  let imgComputer = document.createElement("img");

  let playerLifeDiv = document.createElement("div");
  let computerLifeDiv = document.createElement("div");

  imgPlayer.id = playerId;
  imgPlayer.src = "./assets/img/avatar/" + playerId + ".png";
  imgComputer.id = computerId;
  imgComputer.src = "./assets/img/avatar/" + computerId + ".png";
  playerAvatarDiv.appendChild(imgPlayer);
  computerAvatarDiv.appendChild(imgComputer);

  // Add a before class to handle transition apparition on gameboy screen
  playerAvatarDiv.classList.add("player-avatar-gb");
  computerAvatarDiv.classList.add("computer-avatar-gb");

  gbScreen.appendChild(playerLifeDiv);
  gbScreen.appendChild(computerLifeDiv);
  gbScreen.appendChild(playerAvatarDiv);
  gbScreen.appendChild(computerAvatarDiv);

  setTimeout(() => {
    playerAvatarDiv.classList.add("after");
    computerAvatarDiv.classList.add("after");
    playerLifeDiv.classList.add("player-life");
    computerLifeDiv.classList.add("computer-life");
  }, 500);
}

function updateLifeBar() {
  let;
}

// -----> Function n°8 :
// Function called when startButton is pressed when we are in landing state
function passToGameOffState() {
  // Id added when createPlayer/ComputerArea function is called
  const playerArea = document.getElementById("player-area");
  const computerArea = document.getElementById("computer-area");
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

// Function called when startButton is pressed when we are in gameOff state
function passToLandingState() {
  gameContainerArea.classList.remove("gameOff");
  gameboyArea.classList.remove("gameOff");
  gameboyArea.classList.add("landingState");
  startButton.classList.remove("gameOff", "detected");
  gbScreen.classList.remove("gameOff");
  pageState = "landingState";
}

function passToGameOn() {
  gameContainerArea.classList.remove("gameOff");
  gameboyArea.classList.remove("gameOff");
  gameboyArea.classList.add("gameOn");
  startButton.classList.remove("gameOff");
  gbScreen.classList.remove("gameOff");
  gbScreen.classList.add("gameOn");
  pageState = "gameOn";
}
