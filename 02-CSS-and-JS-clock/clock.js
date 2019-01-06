// var hrs = day.getHours();
// var min = day.getMinutes();
// var sec = day.getSeconds();
// console.log(hrs);
// console.log(min);
// console.log(sec);
function setClock(){
  var day = new Date();
  var secondAngle = day.getSeconds()* 360/60 + 180;
  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;
  // return
}
// var minuteAngle = 0;
// var hourAngle = 0;

function updateClock(){
  var day = new Date();
  document.getElementById('time-number').innerText = day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();
  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;

  setTimeout(updateClock, 1000);
  secondAngle += 360/60;
  // minuteAngle += 360/(60*60);
  // hourAngle += 360/(60*60*60);
}
setClock();
// updateClock();
