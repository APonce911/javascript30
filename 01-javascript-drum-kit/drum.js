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
  // insert class 'clicked' on key
  // timeout
  // remove class 'clicked'
// };

document.addEventListener("keyup", playAudio);

// #TODO
// 1- Change key style when clicked
