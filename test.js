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
const book = {
  id: "5f4471327864ee880caf5afc",
  title: "reprehenderit quis laboris adipisicing et",
  genre: "Poetry",
  authorId: 20,
  borrows: [
    {
      id: "5f446f2e2a4fcd687493a775",
      returned: false,
    },
    {
      id: "5f446f2ebe8314bcec531cc5",
      returned: true,
    },
    {
      id: "5f446f2ea508b6a99c3e42c6",
      returned: true,
    },
    {
      id: "5f446f2e5e2952040e9f9b88",
      returned: true,
    },
    {
      id: "5f446f2eae901a82e0259947",
      returned: true,
    },
    {
      id: "5f446f2ee5be00208a4481e0",
      returned: true,
    },
    {
      id: "5f446f2ebe8314bcec531cc5",
      returned: true,
    },
    {
      id: "5f446f2ee176f80b8d5d24da",
      returned: true,
    },
    {
      id: "5f446f2ed524723353040e5c",
      returned: true,
    },
  ],
};

function getBorrowersForBook1(book, accounts) {
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
let getBorrowersForBook = (book, accounts) => {
  let result = [];
  let borrows = book.borrows;
  for (let record in borrows) {
    for (let index in accounts) {
      let account = accounts[index];
      if (record.id === account.id) {
        let tempAcct = account;
        tempAcct["returned"] = record.returned;

        result.push(tempAcct);
      }
    }
  }
  return result.slice(0, 10);
};

console.log(getBorrowersForBook(book, accounts));
