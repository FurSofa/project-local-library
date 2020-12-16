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
  let count = 0
  books.forEach(book => {
    book.borrows 
  });
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
