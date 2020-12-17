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
  // Local helper function
  // receives author ID and authors array
  // returns author first and last name as string
  let authName = "";
  authors.forEach((author) => {
    if (author.id == id) authName = `${author.name.first} ${author.name.last}`;
  });
  return authName;
}

function totalBooksCount(books) {
  //get total number of books
  return books.length;
}

function totalAccountsCount(accounts) {
  //get total number of accounts
  return accounts.length;
}

function booksBorrowedCount(books) {
  //get total number of books checked out
  let counter = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) counter += 1;
  });
  return counter;
}

function getMostCommonGenres(books) {
  //get top 5 most common genres
  let allGenres = books.map((book) => book.genre);
  let allGenreObj = allGenres.reduce((acc, genre) => {
    acc[genre] ? acc[genre]++ : (acc[genre] = 1);
    return acc;
  }, {});
  let rtnArr = [];
  for (const key in allGenreObj) {
    const element = allGenreObj[key];
    let newObj = {};
    newObj["name"] = key;
    newObj["count"] = element;
    rtnArr.push(newObj);
  }
  let result = rtnArr.sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
  console.log(result.slice(0, 5));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  // get most popular books
  let result = [];
  books.forEach((book) => {
    let newObj = {};
    newObj["name"] = book.title;
    newObj["count"] = book.borrows.length;
    result.push(newObj);
  });
  return sorter(result); // sort array by most popular and slice top 5
}

function getMostPopularAuthors(books, authors) {
  //get top 5 most popular authors
  //params: Books: array of obj
  //params: authors: array of obj
  //returns: arr of obj
  let rtnArr = [];
  let authorBookCountObj = books.reduce((acc, book) => {
    // get author ID and book checkout counts in obj
    acc[book.authorId]
      ? (acc[book.authorId] += book.borrows.length)
      : (acc[book.authorId] = book.borrows.length);
    return acc;
  }, {});
  for (const key in authorBookCountObj) {
    //create object for each author and put into return array
    const value = authorBookCountObj[key];
    let newObj = {};
    newObj["name"] = getAuthorName(authors, parseInt(key));
    newObj["count"] = value;
    rtnArr.push(newObj);
  }
  return sorter(rtnArr); // sort array by most popular and slice top 5
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
