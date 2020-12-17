function findAccountById(accounts, id) {
  // find acout by account ID
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort accounts array by last name
  return accounts.sort((accountA, accountB) => {
    const lastA = accountA.name.last;
    const lastB = accountB.name.last;
    return lastA > lastB ? 1 : -1;
  });
}

function numberOfBorrows(account, books) {
  //find number of borrows based on book
  let count = 0;
  for (let book in books) {
    if (books[book].borrows.find((record) => record.id === account.id))
      count += 1;
  }
  return count;
}

let getBooksPossessedByAccount = (account, books, authors) => {
  //find total books currently borrowed by account
  let ownedBooks = [];
  for (let idx in books) {
    let book = books[idx];
    book.borrows.forEach((record) => {
      if (account.id === record.id && record.returned === false) {
        let bookCopy = book;
        for (let index in authors) {
          let author = authors[index];

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
