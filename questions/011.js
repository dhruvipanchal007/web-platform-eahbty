function calcburningcalories(r, y, j, c) {
  let exercise = +r + +y + +j + +c;
  return exercise;
}
let r = prompt('enter your running calories');
let y = prompt('enter your yoga calories');
let j = prompt('enter your jumping calories');
let c = prompt('enter your cycling calories');
const caloriesburning = calcburningcalories(r, y, j, c);
alert(caloriesburning);
