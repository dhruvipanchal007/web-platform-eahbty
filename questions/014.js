let inappropriatekeywords = ['bad', 'rude', 'offensive', 'inappropriate'];

function findInappropriatecomment(usercomment) {
  for (const keyword of inappropriatekeywords) {
    if (usercomment.includes(keyword)) {
      return true;
    }
    return false;
  }
}
let usercomment = prompt('enter your comment');
if (findInappropriatecomment(usercomment)) {
  alert('your comments is inappropriate language');
} else {
  alert('thank you for sharing');
}
