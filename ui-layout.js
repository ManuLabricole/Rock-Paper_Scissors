// -----> Function n°1 => First Animation when page loaded
const bgImg = document.getElementById("bg_img");
const playerArea = document.getElementById("player-area");
const gameboyArea = document.getElementById("gameboy-area");
const computerArea = document.getElementById("computer-area");
const gameContainerArea = document.getElementById("game-container");
const body = document.querySelector("body");
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

// -----> Function n°1 => Pass layout style from Load --> Land

// First by Timeout function first called in app.js
function loadAnimation() {
  bgImg.classList.remove("loadState");
  bgImg.classList.add("landingState");
  gameboyArea.classList.remove("loadState");
  gameboyArea.classList.add("landingState");

  pageState = "landingState";
}

// -----> Function n°2 => add Avatar with interaction

function addAvatar(filledDiv) {
  avatarList.forEach((name) => {
    // Create div with classList "avatar-card"
    let newDiv = document.createElement("div");
    // Add img with corresponding avatarList[X] avatar inside div
    let img = document.createElement("img");
    img.id = `${name}`;
    img.src = "./assets/img/avatar/" + `${name}` + ".png";
    newDiv.appendChild(img);

    // Add the functions to each DIV per avatar IF in player selection. Computer Avatar have no interaction
    if (filledDiv === avatarPlayerContainer) {
      newDiv.classList.add("avatar-card");
      newDiv.classList.add("player");
      newDiv.addEventListener("click", getPlayerAvatarChoice);
    }
    newDiv.classList.add("avatar-card");
    filledDiv.appendChild(newDiv);
  });
}

// -----> Function n°3 => get avatar player choice

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

  setAvatarClickEvent(isBlinkRunning);
  computerChoiceAnimation();
}

// ----> Function 3.2 => Update event Listener availabilities depending on computerChoice State
function setAvatarClickEvent(isBlinkingRunning) {
  if (isBlinkingRunning === true) {
    avatarPlayerContainerChild.forEach((avatarDiv) => {
      avatarDiv.removeEventListener("click", getPlayerAvatarChoice);
      avatarDiv.style.cursor = "none";
    });
  } else if (isBlinkingRunning === false) {
    avatarPlayerContainerChild.forEach((avatarDiv) => {
      avatarDiv.addEventListener("click", getPlayerAvatarChoice);
      avatarDiv.style.cursor = "pointer";
    });
  }
}

// -----> Function n°4 => Update from Load to land State layout

function updateLayoutOnStart() {
  gameContainerArea.classList.add("gameOff");
  playerArea.classList.remove("landingState");
  playerArea.classList.add("gameOff");
  computerArea.classList.remove("landingState");
  computerArea.classList.add("gameOff");
  gameboyArea.classList.remove("landingState");
  gameboyArea.classList.add("gameOff");
  startButton.classList.remove("detected");
  startButton.classList.add("gameOff");
}

// -----> Function n°5 => Animation for computer random avatar Choice

function avatarBlinkloop(recallLoopCounter, loopCounter, avatarTriggerNum) {
  const avatarComputerContainerChild = Array.from(
    avatarComputerContainer.children
  );
  isBlinkRunning = true;

  // get an array with all the div containing avatar previously created

  let loopCount = recallLoopCounter;
  let counter = loopCounter;

  setTimeout(function () {
    if (counter === 0) {
      // Initilization
      avatarComputerContainerChild[counter].classList.add("active");
      counter++;
    } else if (counter > 0 && counter < avatarTriggerNum) {
      // In between
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
      console.log(avatarTriggerNum);
    } else if (loopCount === -1) {
      isBlinkRunning = false;
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      avatarComputerContainerChild[counter].classList.add("active");
      setAvatarClickEvent(isBlinkRunning);
      displayVersusDiv(playerAvatar, avatarTriggerNum);
      return "run";
    }
    avatarBlinkloop(loopCount, counter, avatarTriggerNum);
  }, 40);
}

// Function triggered when avatar is selected by User, then trigger the computer choice & Animation

const computerChoiceAnimation = async () => {
  //   This loop aim to create dealy between change class of avatar. Otherwise the blink in the same time
  //   Main animation -> take number of loop, inside loop counter and treshold to end the loop
  await avatarBlinkloop(2, 0, avatarTreshold);
};

// Function triggered when computerChoice is DONE
// This function will get the two choices
// Create a div with Avatar chosen : "Player VS Computer" display
// Finally will add a START button to laumnch the game

function displayVersusDiv(playerId, computerId) {
  pageState = "gameOff";
  let previousVersusDiv = Array.from(
    document.getElementsByClassName("versusArea")
  );
  //   If already ran, we have to remove the previsou display of result
  if (previousVersusDiv[0]) {
    previousVersusDiv[0].remove();
  }

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
  imgComputer.id = avatarList[computerId];
  imgComputer.src = "./assets/img/avatar/" + avatarList[computerId] + ".png";
  newComputerAvatarDiv.appendChild(imgComputer);
  newComputerAvatarDiv.classList.add("avatar-card");

  versusDiv.appendChild(newPlayerAvatarDiv);
  versusDiv.appendChild(versusTextDiv);
  versusDiv.appendChild(newComputerAvatarDiv);
  body.appendChild(versusDiv);
}
