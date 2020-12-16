const accounts = require("./public/data/accounts");
const authors = require("./public/data/authors");
const books = require("./public/data/books");

const account = {
  id: "5f446f2ed92454081fb1999b",
  picture: "https://api.adorable.io/avatars/75/ingram.garrison@syntac.net",
  age: 29,
  name: {
    first: "Ingram",
    last: "Garrison",
  },
  company: "SYNTAC",
  email: "ingram.garrison@syntac.net",
  registered: "Tuesday, February 13, 2018 9:11 PM",
};

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
getBooksPossessedByAccount(account, books, authors);
// console.log(getBooksPossessedByAccount(account, books, authors));



function compareIdToAccountId(account){
  if(account.id === id) 
    return true
}
