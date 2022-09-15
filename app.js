const avatarPlayerContainer = document.querySelector(".avatar-container");
const avatarComputerContainer = document.querySelector(
  ".computer-avatar-container"
);

setTimeout(loadAnimation, 10);

addAvatar(avatarPlayerContainer);
addAvatar(avatarComputerContainer);

startbtn();
