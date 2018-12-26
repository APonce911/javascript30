
function playAudio(event) {
  console.log(event.code);
  const audio = document.querySelector(`audio[data-key=${event.code}]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function changeClass(event) {
  const key = document.querySelector(`div[data-key=${event.code}]`);
  if (key) {
    key.classList.add('clicked');
    setTimeout(() => key.classList.remove('clicked') , 100);
  }
}

document.addEventListener("keyup", playAudio);
document.addEventListener("keyup", changeClass);

// #TODO
// 1- Change key style when clicked
