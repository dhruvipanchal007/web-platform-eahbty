function calccompoundInterest(p, r, t) {
  let amount = p * (1 + r / 100) ** t;
  let ci = amount - p;
  return amount;
}
let p = prompt('enter principle amount');
let r = prompt('enter rate of interest');
let t = prompt('enter time period');
const CII = calccompoundInterest(p, r, t);
alert(CII);
