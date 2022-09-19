// -----> function n°1 => Start btn of gameboy

// ---> Function n°2 : Button Start functions calling

function startButtonPressed(state) {
  console.log(state);
  switch (state) {
    case "loadingState":
      break;
    case "landingState":
      passToGameOffState();
      console.log("We are in landing state Do...");
      break;
    case "gameOff":
      alert("Non");
      passToLandingState();
      console.log("We are in landing state Do...");
  }
}

// ---> Function n°2
