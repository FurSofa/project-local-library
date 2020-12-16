function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

let partitionBooksByBorrowedStatus = (books) => {
  let borrowedBooks = books.filter((book) => {
    return book.borrows[0].returned === false;
  });
  let returnedBooks = books.filter((book) => {
    return book.borrows[0].returned == true;
  });
  return [borrowedBooks, returnedBooks];
};

function getBorrowersForBook(book, accounts) {
  let returnArray = [];
  let borrows = book.borrows;
  borrows.forEach((record) => {
    for (const key in accounts) {
      const account = accounts[key]; // account = obj
      if (record.id === account.id) {
        let copyAccount = { ...account };
        copyAccount["returned"] = record.returned;
        returnArray.push(copyAccount);
      }
    }
  });
  return returnArray.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
