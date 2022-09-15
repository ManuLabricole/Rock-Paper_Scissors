// -----> function n°1 => Start btn of gameboy
const startButton = document.getElementById("start-button");
function startbtn() {
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
    updateLayoutOnStart();
  });
}
