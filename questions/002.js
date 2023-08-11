function calccompoundInterest(p, r, n, t) {
  let i = p * (1 + r / n, n * t);
  return i;
}

let p = prompt('enter principle amount');
let r = prompt('enter rate of interest');
let n = prompt('enter compound frequency');
let t = prompt('enter number of years');

const CI = calccompoundInterest(p, r, n, t);
alert(CI);
