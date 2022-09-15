// ------------------ Function n°1 => First Animation when page loaded --------------------- //
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

// ------------------ Function n°2 => add Avatar with interaction -------------------------- //

const avatarList = [
  "avatar_1",
  "avatar_2",
  "avatar_3",
  "avatar_4",
  "avatar_5",
  "avatar_6",
  "avatar_7",
  "avatar_8",
];

function addAvatar(filledDiv) {
  avatarList.forEach((name) => {
    // Create div with classList "avatar-card"
    let newDiv = document.createElement("div");
    // Add img with corresponding avatarList[X] avatar inside div
    let img = document.createElement("img");
    img.id = `${name}`;
    img.src = "./assets/img/avatar/" + `${name}` + ".png";
    newDiv.appendChild(img);

    // Add the functions to each DIV per avatar IF in player selection. Computer Avatar have no interaction
    if (filledDiv === avatarPlayerContainer) {
      newDiv.classList.add("avatar-card");
      newDiv.classList.add("player");
      newDiv.addEventListener("click", getPlayerAvatarChoice);
    }
    newDiv.classList.add("avatar-card");
    filledDiv.appendChild(newDiv);
  });
}

// ------------------ Function n°3 => get avatar player choice -------------------------- //

function getPlayerAvatarChoice(e) {
  // html collection to Array to use forEach() method
  let avatarPlayerContainerChild = Array.from(avatarPlayerContainer.children);

  //   Remove the previous avatar selected
  avatarPlayerContainerChild.forEach((child) => {
    if (child.classList.value.includes("active")) {
      child.classList.remove("active");
    } else {
      return;
    }
  });

  //   Then add the class to the target click div with child click handling
  let targetClass = e.target.classList.value;
  //   If the click is on the DIV element add the class to the target
  if (targetClass.includes("avatar-card")) {
    console.log(true);
    e.target.classList.add("active");
    // If the click is on the img child of DIV - get the parent and add the class
  } else {
    e.target.parentElement.classList.add("active");
  }
}
