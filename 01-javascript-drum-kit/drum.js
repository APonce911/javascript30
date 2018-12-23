// TODO: React to a click on the key!
const key = document.querySelector(".key");
const audio = document.getElementById("sound");

function playAudio(event) {
  // if (key.dataset.key === '65') {
  console.log(event.code)
  if (event.code === 'KeyA') {
    // document.getElementById("sound").play();
    audio.play();
  }
}

const changekey = (event) => {
};

// key.addEventListener("click", changekey);
// key.addEventListener("click", playAudio);
document.addEventListener("keyup", playAudio);
