// document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;
let spacing = document.getElementById('spacing');
let blur = document.getElementById('blur');
const image = document.querySelector(`img`);

function updateSpacing() {
  image.style.marginTop = `${spacing.value}px`;
  image.style.marginLeft = `${spacing.value}px`;
  console.log(spacing.value);
}
function updateBlur() {
  image.style.filter = `blur(${blur.value}px)`;
  console.log(blur.value);
}
spacing.addEventListener("change", updateSpacing);
// blur.addEventListener("change", updateBlur);

