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

const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-selection"
);

function getClickResult(e) {
  console.log(e.target.id);
}

function addAvatar(filledDiv) {
  avatarList.forEach((name) => {
    let newDiv = document.createElement("div");
    let img = document.createElement("img");
    img.id = `${name}`;
    img.src = "./assets/img/avatar/" + `${name}` + ".png";
    newDiv.appendChild(img);
    newDiv.classList.add("avatar-card");
    newDiv.addEventListener("click", getClickResult);
    filledDiv.appendChild(newDiv);
  });
}

addAvatar(avatarPlayerContainer);
addAvatar(avatarComputerContainer);
