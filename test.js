function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let counter = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) counter += 1;
  });
  return counter;
}

function getMostCommonGenres(books) {
  let allGenres = books.map((book) => book.genre);
  let allGenreObj = allGenres.reduce((acc, genre) => {
    acc[genre] ? acc[genre]++ : (acc[genre] = 1);
    return acc;
  }, {});
  let rtnArr = []
  for (const key in allGenreObj) {
      const element = allGenreObj[key];
      let newObj = {}
      newObj["name"] = key
      newObj["count"] = element
      rtnArr.push(newObj)
  }
  let result = rtnArr.sort((a,b)=> {
    if (a.count < b.count) return 1
    if (a.count > b.count) return -1
    return 0
  })
  console.log(result.slice(0,5));
  return result.slice(0,5)
}

function getMostPopularBooks (books) {

  let result = [];
  books.forEach((book) => {
    let newObj = {};
    newObj["name"] = book.title;
    newObj["count"] = book.borrows.length;
    result.push(newObj);
  });
  return sorter(result).slice(0,5)
}

function sorter(arr) {
  // Local helper function
  // receives arr of obj
  // sorts by obj.count and slice top 5
  return arr
    .sort((a, b) => {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    })
    .slice(0, 5);
}
function getAuthorName(authors, id) {
  let authName = "";
  authors.forEach((author) => {
    if (author.id == id) authName = `${author.name.first} ${author.name.last}`;
  });
  return authName;
}

function getMostPopularAuthors(books, authors) {
  let rtnArr = [];
  let authorBookCountObj = books.reduce((acc, book) => {
    acc[book.authorId]
      ? (acc[book.authorId] += book.borrows.length)
      : (acc[book.authorId] = book.borrows.length);
    return acc;
  }, {});
  console.log(authorBookCountObj);
  for (const key in authorBookCountObj) {
    const value = authorBookCountObj[key];
    let newObj = {};
    newObj["name"] = getAuthorName(authors, parseInt(key));
    newObj["count"] = value;
    rtnArr.push(newObj);
  }
  return sorter(rtnArr);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
