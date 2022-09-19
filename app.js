const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-container"
);
const states = ["loadState", "landingState", "gameOff", "gameOn"];
let pageState = states[0];

let playerAvatar = "";

setTimeout(loadAnimation, 10); // --> ui-layout.js

// Update the the layout by loading the child and store them in a const
addAvatar(avatarPlayerContainer); // -->ui-layout.js
addAvatar(avatarComputerContainer); // -->ui-layout.js
