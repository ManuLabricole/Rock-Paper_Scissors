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

// ------------------------------------------------------------------------------------------
// Test button interaction

const startButton = document.getElementById("start-button");

startButton.addEventListener("mouseenter", function (e) {
  let startButtonClass = e.target.classList.value;
  if (startButtonClass.includes("detected")) {
    console.log("already hovered");
    return;
  } else if (startButtonClass.includes("gameOff")) {
    return;
  } else {
    startButton.classList.add("detected");
  }
});

startButton.addEventListener("click", () => {
  playerArea.classList.remove("landingState");
  playerArea.classList.add("gameOff");
  computerArea.classList.remove("landingState");
  computerArea.classList.add("gameOff");
  gameboyArea.classList.remove("landingState");
  gameboyArea.classList.add("gameOff");
  startButton.classList.remove("detected");
  startButton.classList.add("gameOff");
});
