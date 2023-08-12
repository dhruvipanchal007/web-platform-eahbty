function calcAverage(a, b, c, d, e) {
  let average = (+a + +b + +c + +d + +e) / 5;
  return average;
}
let a = prompt('enter first value');
let b = prompt('enter second value');
let c = prompt('enter third value');
let d = prompt('enter fourth value');
let e = prompt('enter fifth value');

const ans = calcAverage(a, b, c, d, e);
alert(ans);
