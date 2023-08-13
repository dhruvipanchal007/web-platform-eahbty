function result(playerscore) {
  let winningscore = 85;
  if (playerscore >= winningscore) {
    alert('you won the game');
  } else {
    alert('sorry!you can not catch game');
  }
}
let playerscore = prompt('enter your score');
const displayresult = result(playerscore);
alert(displayresult);
