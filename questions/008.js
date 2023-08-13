let booksname = ['science', 'gujarati', 'english', 'g.k'];

function searchbook(booksname) {
  for (let i = 0; i < booksname.length; i++) {
    if (searchtitle.toLowerCase() === booksname[i]) {
      return i;
    }
  }
}

let searchtitle = prompt('enter book name');
const findbook = searchbook(booksname);
alert(findbook);
