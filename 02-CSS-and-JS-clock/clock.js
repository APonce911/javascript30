// var hrs = day.getHours();
// var min = day.getMinutes();
// var sec = day.getSeconds();
// console.log(hrs);
// console.log(min);
// console.log(sec);

var secondAngle = 0;
function updateClock(){
  var day = new Date();
  document.getElementById('time-number').innerText = day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();
  document.querySelector('.second').style.transform = `rotate(${secondAngle}deg)`;

  setTimeout(updateClock, 1000);
  secondAngle += 360/60;
}
updateClock();
