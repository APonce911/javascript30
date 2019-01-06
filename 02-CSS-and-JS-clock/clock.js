// var hrs = day.getHours();
// var min = day.getMinutes();
// var sec = day.getSeconds();
// console.log(hrs);
// console.log(min);
// console.log(sec);
function setClock(){
  const day = new Date();
  const secondAngle = day.getSeconds()* 360/60 + 180;
  const minuteAngle = day.getMinutes()* 360/60 + 180;

  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minuteAngle}deg)`;
  return {secondAngle}
}
// var minuteAngle = 0;
// var hourAngle = 0;

function updateClock(){
  const day = new Date();

  const initialTime = setClock();
  let secondAngle = initialTime.secondAngle

  console.log(initialTime)
  console.log(initialTime.secondAngle)

  document.getElementById('time-number').innerText = day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();
  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;

  setTimeout(updateClock, 1000);
  secondAngle += 360/60;
  // minuteAngle += 360/(60*60);
  // hourAngle += 360/(60*60*60);
}
// setClock();
updateClock();
