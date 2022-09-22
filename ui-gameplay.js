// -----> function n°1 => Start btn of gameboy

// ---> Function n°2 : Button Start functions calling

function startButtonPressed(state) {
  console.log(state);
  switch (state) {
    case "loadingState":
      break;
    case "landingState":
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
  // Remove play button
  // Change class of layout to make GB bigger
  // Lannch GameplayOn
}
