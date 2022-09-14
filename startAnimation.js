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

setTimeout(loadAnimation, 10);

// ------------------------------------------------------------------------------------------
// Test button interaction

const startButton = document.getElementById("start-button");

// function startHovered() {
//   startButton.classList.add("detected");
// }

// startButton.addEventListener(onmouseover, (e) => {
//   console.log(e);
// });

startButton.addEventListener("mouseenter", function (e) {
  let startButtonClass = e.target.classList.value;
  if (startButtonClass.includes("detected")) {
    console.log("already hovered");
    return;
  } else {
    startButton.classList.add("detected");
  }
});
