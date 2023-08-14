function calcSpendingTime(z, p, g, m) {
  let spendingtime = +z + +p + +g + +m;
  return spendingtime;
}
let z = prompt('how much time spend in zoo');
let p = prompt('how much time spend in park');
let g = prompt('how much time spend in garden');
let m = prompt('how much time spend in museam ');
const AT = calcSpendingTime(z, p, g, m);
alert(AT);
