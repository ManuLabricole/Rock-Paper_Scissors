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
