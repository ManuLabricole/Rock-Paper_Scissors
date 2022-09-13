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

// Select the two containers which will be filled with avatar div
const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-selection"
);

function getClickResult(e) {
  console.log(e.target.id);
}

// Function that create DIV and img inside. Src of img is created calling avatarList
function addAvatar(filledDiv) {
  avatarList.forEach((name) => {
    // Create div with classList "avatar-card"
    let newDiv = document.createElement("div");
    // Add img with corresponding avatarList[X] avatar inside div
    let img = document.createElement("img");
    img.id = `${name}`;
    img.src = "./assets/img/avatar/" + `${name}` + ".png";
    newDiv.appendChild(img);

    newDiv.classList.add("avatar-card");
    // Add the functions to each DIV per avatar
    newDiv.addEventListener("click", getClickResult);
    filledDiv.appendChild(newDiv);
  });
}

addAvatar(avatarPlayerContainer);
addAvatar(avatarComputerContainer);
