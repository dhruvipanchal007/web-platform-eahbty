let inappropriatekeywords = ['bad', 'rude', 'offensive', 'inappropriate'];

function findInappropriatecomment(usercomment) {
  for (const keyword of inappropriatekeywords) {
    if (usercomment.includes(keyword)) {
      return true;
    }
  }
  return false;
}
// debugger;
let usercomment = prompt('enter your comment');
if (findInappropriatecomment(usercomment)) {
  alert('your comments is inappropriate language');
} else {
  alert('thank you for sharing');
}

function test() {
  for (let i = 0; i < 3; i++) {
    console.log('hi'); // hi
    return 10;
  }
  return 20;
}

test(); //
