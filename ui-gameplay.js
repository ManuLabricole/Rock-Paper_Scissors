const states = ["loadState", "landingState", "gameOff", "gameOn"];
let pageState = states[0];

let playerAvatar = "";

// -----> function n°1 => First animation when page loaded

// Update the the layout by loading the child and store them in a const
setTimeout(loadAnimation, 10); // --> ui-layout.js

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
      passToGameOffState();
      // addAvatar(avatarPlayerContainer);
      //        ---> Create Computer Area Div
      //        ---> Add them on layout at the right place
      // ->
      //addAvatar(avatarPlayerContainer); // -->ui-layout.js
      //addAvatar(avatarComputerContainer); // -->ui-layout.js
      //passToGameOffState();
      break;
    case "gameOff":
    //passToLandingState();
  }
}

// ---> Function n°2

// function playButtonPressed() {
//   removePlayButton();
//   passToGameOnState();
//   removeVersusDiv();
//   // Change class of layout to make GB bigger
//   // Lannch GameplayOn
// }
