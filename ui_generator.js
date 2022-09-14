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
let avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-selection"
);

function getClickResult(e) {
  avatarPlayerContainer = document.querySelector(".avatar-container");
  let el = e.target;
  let parentEl = el.parentElement;
  let child = avatarComputerContainer.children;
  child = Array.from(child);

  //   child[3].classList.add("oui");

  for (el in child) {
    console.log(child[el]);
    child[el].classList.remove("active");
  }

  //   child.forEach((el) => {
  //     removeActiveClassAvatar(el);
  //   });
  parentEl.classList.add("active");
}

// function removeActiveClassAvatar(el) {
//   console.log(el);
//   el.classList.add("Baaaa");
// }

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
