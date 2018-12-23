// TODO: React to a click on the button!
const button = document.querySelector(".key");
const audio = document.getElementById("sound");

function playAudio(event) {
  audio.play();
}

const changeButton = (event) => {
};

button.addEventListener("click", changeButton);
button.addEventListener("click", playAudio);

