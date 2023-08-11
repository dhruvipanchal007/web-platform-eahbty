function calcSimpleInterest(p,r,n){
  let i=(p*r*n)/100;
  return i;
}
let p=prompt('enter principle amount');
let r=prompt('enter rate of interest');
let n=prompt('enter number of years');

const SI=calcSimpleInterest(p,r,n);
alert(SI);