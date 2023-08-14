function result(playerscore) {
  let winningscore = 85;
  if (playerscore >= winningscore) {
    return 'you won the game';
  } else {
    return 'sorry!you can not catch game';
  }
}
let playerscore = prompt('enter your score');
const displayresult = result(playerscore);
alert(displayresult);
