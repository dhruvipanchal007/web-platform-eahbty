function assignGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 80) {
    return 'c';
  } else if (score >= 75) {
    return 'D';
  } else {
    return 'E';
  }
}
let score = [prompt('enter your score')];
const Grade = assignGrade(score);
alert(Grade);
