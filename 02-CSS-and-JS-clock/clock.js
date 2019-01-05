// var hrs = day.getHours();
// var min = day.getMinutes();
// var sec = day.getSeconds();
// console.log(hrs);
// console.log(min);
// console.log(sec);

var HourAngle = 0;
function updateClock(){
  var day = new Date();
  HourAngle += 1;
  document.getElementById('time-number').innerText = day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();
  document.querySelector('.hour').style.transform = `rotate(${HourAngle}deg)`;

  setTimeout(updateClock, 1000);
}
updateClock();
