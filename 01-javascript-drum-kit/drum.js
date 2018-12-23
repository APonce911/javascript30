const key = document.querySelector(".key");

function playAudio(event) {
  console.log(event.code)
  let audio = document.querySelector(`audio[data-key=${event.code}]`);
  if (audio) audio.play();
}

// const changekey = (event) => {
// };

document.addEventListener("keyup", playAudio);
