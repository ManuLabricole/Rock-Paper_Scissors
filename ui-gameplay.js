const states = ["loadState", "landingState", "gameOff", "gameOn"];
let pageState = states[0];

let playerAvatar = "";

// --------------------------------------------------------------------------------------------//
// -----> function n°1 => First animation when page loaded

// Update the the layout by loading the child and store them in a const
setTimeout(loadAnimation, 10); // --> ui-layout.js

// --------------------------------------------------------------------------------------------//
// ---> Function n°2 : Button Start functions calling

function startButtonPressed(state) {
  switch (state) {
    case "loadingState":
      break;
    case "landingState":
      // Async function will call createPlayerArea
      addAvatar("avatar-container");
      // Async function will call createComputerArea
      addAvatar("computer-avatar-container");
      // Update layout Class to style
      passToGameOffState();
      break;
    case "gameOff":
    //passToLandingState();
  }
}

// --------------------------------------------------------------------------------------------//
// ---> Function n°3 : Player select an avatar an trigger Layout Animation

function getPlayerAvatarChoice(e) {
  // html collection to Array to use forEach() method
  let avatarPlayerContainer = document.querySelector(".avatar-container");
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

  // These two functions are called in layout.js
  setAvatarClickEvent(isBlinkRunning);
  computerChoiceAnimation();
}

// --------------------------------------------------------------------------------------------//
// ---> Function n°4 : Player click on Play and Launch the game

function playButtonPressed() {
  removePlayButton();
  passToGameOnState();
  removeVersusDiv();
  // Change class of layout to make GB bigger
  // Lannch GameplayOn
}
