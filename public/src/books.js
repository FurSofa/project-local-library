function findAuthorById(authors, id) {
  //find author by ID
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  //find book by ID
  return books.find(book => book.id === id)
}

let partitionBooksByBorrowedStatus = books => {
  //returns two arrays containing borrowd and returned books
  let borrowedBooks = books.filter(book => {//find all borrowed books
    return book.borrows[0].returned === false;
  })
  let returnedBooks = books.filter(book => {//find all returned borrowed books
    return book.borrows[0].returned == true;
  })
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {// find all borrowers for a book
  let returnArray = [];
  let borrows = book.borrows;
  borrows.forEach((record) => {
    for (const key in accounts) {
      const account = accounts[key]; // account = obj
      if (record.id === account.id) {
        let copyAccount = {...account};
        copyAccount["returned"] = record.returned;
        returnArray.push(copyAccount);
      }
    }
  });
  return returnArray.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
