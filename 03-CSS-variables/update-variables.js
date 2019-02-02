let spacing = document.getElementById('spacing');
let blur = document.getElementById('blur');
let base = document.getElementById('base');
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
function updateBase() {
  document.body.style.background = base.value;
  console.log(base.value);
}
spacing.addEventListener("change", updateSpacing);
blur.addEventListener("change", updateBlur);
base.addEventListener("change", updateBase);

