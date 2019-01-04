// var hrs = day.getHours();
// var min = day.getMinutes();
// var sec = day.getSeconds();
// console.log(hrs);
// console.log(min);
// console.log(sec);

function updateClock(){
var day = new Date();
  document.getElementById('hour').innerText = day.getHours() + "-";
  document.getElementById('minute').innerText = day.getMinutes() + "-";
  document.getElementById('second').innerText = day.getSeconds();
  setTimeout(updateClock, 1000);
}
updateClock();
