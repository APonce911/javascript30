const key = document.querySelector(".key");

function playAudio(event) {
  console.log(event.code);
  let audio = document.querySelector(`audio[data-key=${event.code}]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

// const changekey = (event) => {
// };

document.addEventListener("keyup", playAudio);

// #TODO
// 1- Play when clicked, without waiting the end of sound
// 3- Change key style when clicked
