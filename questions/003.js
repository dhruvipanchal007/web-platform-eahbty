// function calcareatoradius(r) {
//   let a = Math.PI * r * r;
//   return a;
// }
// let r = prompt('enter radius');
// const area = calcareatoradius(r);
// alert(area);

function calcareatodiameter(d) {
  let a = (Math.PI * d * d) / 4;
  return a;
}
let d = prompt('enter diameter');
const area = calcareatodiameter(d);
alert(area);
