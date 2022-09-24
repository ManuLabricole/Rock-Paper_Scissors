const states = ["loadState", "landingState", "gameOff", "gameOn"];
let pageState = states[0];

let playerAvatar = "";

// -----> function n°1 => First animation when page loaded

// Update the the layout by loading the child and store them in a const
setTimeout(loadAnimation, 10); // --> ui-layout.js

// ---> Function n°2 : Button Start functions calling

function startButtonPressed(state) {
  console.log(state);
  switch (state) {
    case "loadingState":
      break;
    case "landingState":
      addAvatar(avatarPlayerContainer); // -->ui-layout.js
      addAvatar(avatarComputerContainer); // -->ui-layout.js
      passToGameOffState();
      console.log("We are in landing state");
      break;
    case "gameOff":
      passToLandingState();
      console.log("We are in gameoff state Do...");
  }
}

// ---> Function n°2

function playButtonPressed() {
  removePlayButton();
  playerArea.classList.remove("gameOff");
  playerArea.classList.add("gameOn");
  // Change class of layout to make GB bigger
  // Lannch GameplayOn
}
