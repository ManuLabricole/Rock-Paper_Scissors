// -----> function n°1 => Start btn of gameboy

function startbtn() {
  const startButton = document.getElementById("start-button");
  console.log(startButton);

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
}
