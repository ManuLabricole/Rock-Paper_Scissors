const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-container"
);

setTimeout(loadAnimation, 10); // --> ui-layout.js

// Update the the layout by loading the child and store them in a const
const avatarPlayerContainerChild = addAvatar(avatarPlayerContainer); // -->ui-layout.js

addAvatar(avatarComputerContainer); // -->ui-layout.js

startbtn(); // // -->ui-gameplay.js
