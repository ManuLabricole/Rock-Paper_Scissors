// -----> Function n°1 => First Animation when page loaded
const bgImg = document.getElementById("bg_img");
const playerArea = document.getElementById("player-area");
const gameboyArea = document.getElementById("gameboy-area");
const computerArea = document.getElementById("computer-area");

function loadAnimation() {
  bgImg.classList.remove("loadState");
  bgImg.classList.add("landingState");
  gameboyArea.classList.remove("loadState");
  gameboyArea.classList.add("landingState");
  console.log(gameboyArea);
}

// -----> Function n°2 => add Avatar with interaction

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
  let avatarPlayerContainerChild = Array.from(avatarPlayerContainer.children);
  let targetClass = e.target.classList.value;

  //   Remove the previous avatar selected
  avatarPlayerContainerChild.forEach((child) => {
    if (child.classList.value.includes("active")) {
      child.classList.remove("active");
    } else {
      return;
    }
  });

  //   Then add the class to the target click div with child click handling
  //   If the click is on the DIV element add the class to the target
  if (targetClass.includes("avatar-card")) {
    console.log(true);
    e.target.classList.add("active");
    // If the click is on the img child of DIV - get the parent and add the class
  } else {
    e.target.parentElement.classList.add("active");
  }

  computerChoiceAnimation();

  //   return e.target.id;
}

// -----> Function n°4 => Update from Load to land State layout

function updateLayoutOnStart() {
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
  // get an array with all the div containing avatar previously created
  let avatarComputerContainerChild = Array.from(
    avatarComputerContainer.children
  );

  let loopCount = recallLoopCounter;
  let counter = loopCounter;

  console.log(loopCount);
  setTimeout(function () {
    if (counter === 0) {
      avatarComputerContainerChild[counter].classList.add("active");
      // Check if class of last avatar has already been active
      if (
        avatarComputerContainerChild[
          avatarTriggerNum - 1
        ].classList.value.includes("active")
      ) {
        avatarComputerContainerChild[counter - 1].classList.remove("active");
      }
      counter++;
      avatarBlinkloop(loopCount, counter, avatarTriggerNum);
    } else if (counter > 0 && counter < avatarTriggerNum) {
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      avatarComputerContainerChild[counter].classList.add("active");
      counter++;
      avatarBlinkloop(loopCount, counter, avatarTriggerNum);
      //   End of loop ==> Update loop counter before calling again
    } else if (counter === avatarTriggerNum && loopCount > 0) {
      avatarComputerContainerChild[counter - 1].classList.remove("active");
      loopCount--;
      counter = 0;
      avatarBlinkloop(loopCount, counter, avatarTriggerNum);
    } else if (counter === avatarTriggerNum && loopCount === 0) {
      avatarComputerContainerChild[counter - 1].classList.remove("active");

      loopCount = -1;
      counter = 0;
      avatarTriggerNum = 4; // random computer selection
      avatarBlinkloop(loopCount, counter, avatarTriggerNum);
    } else if (loopCount === -1) {
      return "run";
    }
  }, 50);
}

function computerChoiceAnimation() {
  // Animation on every avatars

  let avatarTreshold = avatarList.length;
  //   This loop aim to create dealy between change class of avatar. Otherwise the blink in the same time
  //   Main animation -> take number of loop, inside loop counter and treshold to end the loop
  avatarBlinkloop(2, 0, avatarTreshold);

  //   avatarBlinkloop(i, avatarTreshold);

  // Animation from avatar-1 --> Avatar selected
}
