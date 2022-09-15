const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-container"
);

setTimeout(loadAnimation, 10); // --> ui-layout.js

addAvatar(avatarPlayerContainer); // -->ui-layout.js
addAvatar(avatarComputerContainer); // -->ui-layout.js

startbtn(); // // -->ui-gameplay.js
