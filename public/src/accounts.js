function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastA = accountA.name.last;
    const lastB = accountB.name.last;
    return lastA > lastB ? 1 : -1;
  });
}

function numberOfBorrows(account, books) {
  let count = 0;
  books.forEach((book) => {
    book.borrows;
  });
}

let getBooksPossessedByAccount = (account, books, authors) => {
  let ownedBooks = [];
  for (let idx in books) {
    let book = books[idx];
    book.borrows.forEach((record) => {
      if (account.id === record.id && record.returned === false) {
        let bookCopy = book;
        for (let i in authors) {
          let author = authors[i];

          if (author.id === book.authorId) {
            bookCopy["author"] = author;
            ownedBooks.push(bookCopy);
          }
        }
      }
    });
  }
  return ownedBooks;
};
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
