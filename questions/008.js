function searchbook(booksname) {
  let searchtitle = 'science';
  for (let i = 0; i < booksname.length; i++) {
    if (searchtitle.toLowerCase === booksname[i]) {
      return searchtitle;
    }
  }
}
let booksname = ['science', 'gujarati', 'maths', 'g.k', 'english'];
const findbook = searchbook(booksname);
alert(findbook);
