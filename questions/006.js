function findmaxnumber(numbers) {
  let maxnumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (maxnumber < numbers[i]) {
      maxnumber = numbers[i];
    }
  }
  return maxnumber;
}

let numbers = [5, 10, 50, 100];
const largenumber = findmaxnumber(numbers);
console.log(largenumber);
