function searchbook(booksname) {
  let searchtitle = 'science';
  for (let i = 0; i < booksname.length; i++) {
    if (searchtitle === booksname[i]) {
      return searchtitle;
    }
  }
}
let booksname = prompt('enter book name');
const findbook = searchbook(booksname);
alert(findbook);
